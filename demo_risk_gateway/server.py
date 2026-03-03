#!/usr/bin/env python3
"""
Mini risk-gateway demo:
- SMS code login API that always triggers risk (40301) before success.
- Slider captcha chain: generate -> verify -> validate.
- Simplified track judgement: only final x coordinate must be in tolerance.
- Captcha images are generated via Pillow.

Run:
    python3 demo_risk_gateway/server.py
Open:
    http://127.0.0.1:8080/
"""

from __future__ import annotations

import base64
import json
import random
import threading
import time
import uuid
from dataclasses import dataclass, field
from datetime import datetime, timedelta
from http import HTTPStatus
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from typing import Any
from urllib.parse import parse_qs, urlparse

from PIL import Image, ImageDraw


HOST = "127.0.0.1"
PORT = 8080
STATIC_DIR = Path(__file__).parent / "static"

PRESET_SMS_CODE = "999222"
CAPTCHA_WIDTH = 320
CAPTCHA_HEIGHT = 160
PIECE_SIZE = 52
CAPTCHA_TTL_SEC = 120
VERIFY_TOKEN_TTL_SEC = 120
PASS_TTL_SEC = 180
SESSION_TTL_SEC = 600
POSITION_TOLERANCE = 8


def now_ts() -> float:
    return time.time()


def make_id(prefix: str) -> str:
    return f"{prefix}_{uuid.uuid4().hex[:24]}"


def iso_expire(seconds: int) -> str:
    return (datetime.utcnow() + timedelta(seconds=seconds)).strftime("%Y-%m-%d %H:%M:%S")


@dataclass
class GatewaySession:
    session_id: str
    created_at: float = field(default_factory=now_ts)
    updated_at: float = field(default_factory=now_ts)


@dataclass
class LoginChallenge:
    login_key: str
    phone: str
    device_id: str
    session_id: str
    trace_id: str
    created_at: float = field(default_factory=now_ts)
    status: str = "issued"  # issued -> generated -> verified -> validated

    captcha_token: str | None = None
    captcha_expire_at: float = 0.0
    expected_x: int = 0
    slider_y: int = 0

    verify_token: str | None = None
    verify_expire_at: float = 0.0
    validate_used: bool = False


class DemoState:
    def __init__(self) -> None:
        self.lock = threading.Lock()
        self.sessions: dict[str, GatewaySession] = {}
        self.challenges: dict[str, LoginChallenge] = {}
        self.captcha_token_to_login_key: dict[str, str] = {}
        self.verify_token_to_login_key: dict[str, str] = {}
        # key: (session_id, phone, device_id) -> expire_at
        self.passed_contexts: dict[tuple[str, str, str], float] = {}

    def gc(self) -> None:
        now = now_ts()
        # Sessions
        for sid, sess in list(self.sessions.items()):
            if now - sess.updated_at > SESSION_TTL_SEC:
                self.sessions.pop(sid, None)
        # Challenges
        for login_key, ch in list(self.challenges.items()):
            expired = now - ch.created_at > max(CAPTCHA_TTL_SEC, VERIFY_TOKEN_TTL_SEC) * 3
            if expired:
                if ch.captcha_token:
                    self.captcha_token_to_login_key.pop(ch.captcha_token, None)
                if ch.verify_token:
                    self.verify_token_to_login_key.pop(ch.verify_token, None)
                self.challenges.pop(login_key, None)
        # Passed contexts
        for key, expire_at in list(self.passed_contexts.items()):
            if now > expire_at:
                self.passed_contexts.pop(key, None)

    def get_or_create_session(self, incoming_session: str | None) -> GatewaySession:
        now = now_ts()
        with self.lock:
            self.gc()
            if incoming_session and incoming_session in self.sessions:
                sess = self.sessions[incoming_session]
                sess.updated_at = now
                return sess
            sid = make_id("gls")
            sess = GatewaySession(session_id=sid, created_at=now, updated_at=now)
            self.sessions[sid] = sess
            return sess

    def create_login_challenge(
        self,
        *,
        phone: str,
        device_id: str,
        session_id: str,
        trace_id: str,
    ) -> LoginChallenge:
        challenge = LoginChallenge(
            login_key=make_id("lk"),
            phone=phone,
            device_id=device_id,
            session_id=session_id,
            trace_id=trace_id,
        )
        with self.lock:
            self.gc()
            self.challenges[challenge.login_key] = challenge
        return challenge

    def issue_captcha(self, challenge: LoginChallenge) -> dict[str, Any]:
        gap_x = random.randint(100, CAPTCHA_WIDTH - PIECE_SIZE - 24)
        gap_y = random.randint(30, CAPTCHA_HEIGHT - PIECE_SIZE - 20)
        bg_data_url, slider_data_url = render_slider_captcha(gap_x=gap_x, gap_y=gap_y)
        token = make_id("ctk")
        now = now_ts()
        with self.lock:
            challenge.status = "generated"
            challenge.captcha_token = token
            challenge.captcha_expire_at = now + CAPTCHA_TTL_SEC
            challenge.expected_x = gap_x
            challenge.slider_y = gap_y
            self.captcha_token_to_login_key[token] = challenge.login_key
        return {
            "type": "slider",
            "tips": "Drag the slider block to the target area",
            "background_img": bg_data_url,
            "slider_img": slider_data_url,
            "slider_y": gap_y,
            "token": token,
        }

    def get_challenge_by_login_key(self, login_key: str) -> LoginChallenge | None:
        with self.lock:
            self.gc()
            return self.challenges.get(login_key)

    def get_challenge_by_captcha_token(self, token: str) -> LoginChallenge | None:
        with self.lock:
            self.gc()
            login_key = self.captcha_token_to_login_key.get(token)
            if not login_key:
                return None
            return self.challenges.get(login_key)

    def get_challenge_by_verify_token(self, token: str) -> LoginChallenge | None:
        with self.lock:
            self.gc()
            login_key = self.verify_token_to_login_key.get(token)
            if not login_key:
                return None
            return self.challenges.get(login_key)

    def can_pass_login(self, *, session_id: str, phone: str, device_id: str) -> bool:
        key = (session_id, phone, device_id)
        with self.lock:
            self.gc()
            expire_at = self.passed_contexts.get(key)
            if not expire_at or now_ts() > expire_at:
                return False
            # One-time pass ticket: consume on success.
            self.passed_contexts.pop(key, None)
            return True

    def mark_validated(self, challenge: LoginChallenge) -> None:
        key = (challenge.session_id, challenge.phone, challenge.device_id)
        with self.lock:
            challenge.status = "validated"
            challenge.validate_used = True
            self.passed_contexts[key] = now_ts() + PASS_TTL_SEC


STATE = DemoState()


def image_to_data_url(img: Image.Image) -> str:
    from io import BytesIO

    buf = BytesIO()
    img.save(buf, format="PNG")
    b64 = base64.b64encode(buf.getvalue()).decode("ascii")
    return f"data:image/png;base64,{b64}"


def render_slider_captcha(*, gap_x: int, gap_y: int) -> tuple[str, str]:
    bg = Image.new("RGB", (CAPTCHA_WIDTH, CAPTCHA_HEIGHT), "#e8f3ff")
    draw = ImageDraw.Draw(bg)

    # Base gradient-like bars
    for y in range(0, CAPTCHA_HEIGHT, 4):
        shade = int(235 - (y / CAPTCHA_HEIGHT) * 35)
        draw.rectangle([0, y, CAPTCHA_WIDTH, y + 4], fill=(shade, shade + 10, 255))

    # Random visual noise to look less synthetic
    rng = random.Random()
    for _ in range(28):
        x1 = rng.randint(0, CAPTCHA_WIDTH - 1)
        y1 = rng.randint(0, CAPTCHA_HEIGHT - 1)
        x2 = min(CAPTCHA_WIDTH - 1, x1 + rng.randint(16, 54))
        y2 = min(CAPTCHA_HEIGHT - 1, y1 + rng.randint(8, 30))
        color = (rng.randint(120, 220), rng.randint(130, 230), rng.randint(140, 240))
        draw.rounded_rectangle([x1, y1, x2, y2], radius=4, outline=color, width=1)

    # Target slot
    slot = [gap_x, gap_y, gap_x + PIECE_SIZE, gap_y + PIECE_SIZE]
    draw.rounded_rectangle(slot, radius=8, fill=(255, 255, 255), outline=(70, 70, 70), width=2)
    # Hint border around slot to make demo easier
    draw.rounded_rectangle(
        [gap_x - 2, gap_y - 2, gap_x + PIECE_SIZE + 2, gap_y + PIECE_SIZE + 2],
        radius=10,
        outline=(30, 30, 30),
        width=1,
    )

    slider = Image.new("RGBA", (PIECE_SIZE, PIECE_SIZE), (255, 255, 255, 0))
    sdraw = ImageDraw.Draw(slider)
    sdraw.rounded_rectangle(
        [0, 0, PIECE_SIZE - 1, PIECE_SIZE - 1],
        radius=8,
        fill=(255, 255, 255, 220),
        outline=(20, 20, 20, 255),
        width=2,
    )
    # Texture lines
    for y in range(6, PIECE_SIZE, 6):
        sdraw.line([(6, y), (PIECE_SIZE - 7, y)], fill=(120, 120, 120, 180), width=1)

    return image_to_data_url(bg), image_to_data_url(slider)


class DemoHandler(BaseHTTPRequestHandler):
    server_version = "RiskGatewayDemo/0.1"

    def log_message(self, fmt: str, *args: Any) -> None:  # noqa: A003
        # Keep default stderr logging concise.
        super().log_message(fmt, *args)

    def _ensure_gateway_context(self) -> None:
        if hasattr(self, "_gateway_session_id") and hasattr(self, "_gateway_trace_id"):
            return
        incoming_session = self.headers.get("GenieLamp-H-session")
        session = STATE.get_or_create_session(incoming_session)
        incoming_trace = self.headers.get("X-Trace-Id")
        self._gateway_session_id = session.session_id
        self._gateway_trace_id = incoming_trace or make_id("trace")

    def _prepare_gateway_headers(self) -> dict[str, str]:
        self._ensure_gateway_context()
        return {
            "GenieLamp-H-session": self._gateway_session_id,
            "X-Trace-Id": self._gateway_trace_id,
        }

    def _read_json_body(self) -> dict[str, Any]:
        length = int(self.headers.get("Content-Length", "0") or "0")
        if length <= 0:
            return {}
        raw = self.rfile.read(length)
        try:
            data = json.loads(raw.decode("utf-8"))
        except (json.JSONDecodeError, UnicodeDecodeError):
            return {}
        if isinstance(data, dict):
            return data
        return {}

    def _send_json(
        self,
        payload: dict[str, Any],
        *,
        status: int = HTTPStatus.OK,
        extra_headers: dict[str, str] | None = None,
    ) -> None:
        body = json.dumps(payload, ensure_ascii=False).encode("utf-8")
        headers = self._prepare_gateway_headers()
        if extra_headers:
            headers.update(extra_headers)

        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", "no-store")
        for key, value in headers.items():
            self.send_header(key, value)
        self.end_headers()
        self.wfile.write(body)

    def _send_html(self, html: str, *, status: int = HTTPStatus.OK) -> None:
        body = html.encode("utf-8")
        headers = self._prepare_gateway_headers()
        self.send_response(status)
        self.send_header("Content-Type", "text/html; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", "no-store")
        for key, value in headers.items():
            self.send_header(key, value)
        self.end_headers()
        self.wfile.write(body)

    def _json_error(self, message: str, *, code: int = 1001) -> None:
        self._send_json({"code": code, "message": message, "data": None})

    def do_GET(self) -> None:  # noqa: N802
        parsed = urlparse(self.path)
        path = parsed.path

        if path == "/":
            index_path = STATIC_DIR / "index.html"
            if not index_path.exists():
                self._send_html("<h1>index.html not found</h1>", status=HTTPStatus.NOT_FOUND)
                return
            self._send_html(index_path.read_text(encoding="utf-8"))
            return

        if path == "/health":
            self._send_json({"status": "ok", "server_time": int(now_ts())})
            return

        if path == "/auth/captcha/validate":
            params = parse_qs(parsed.query)
            verify_token = (params.get("token") or [""])[0].strip()
            login_key = (params.get("login_key") or [""])[0].strip()
            return self._handle_captcha_validate(verify_token=verify_token, login_key=login_key)

        self._send_json({"code": 404, "message": f"Unknown path: {path}"}, status=HTTPStatus.NOT_FOUND)

    def do_POST(self) -> None:  # noqa: N802
        path = urlparse(self.path).path
        if path == "/auth/login":
            return self._handle_auth_login()
        if path == "/auth/captcha/polaris/captcha/generate":
            return self._handle_captcha_generate()
        if path == "/auth/captcha/polaris/captcha/verify":
            return self._handle_captcha_verify()
        self._send_json({"code": 404, "message": f"Unknown path: {path}"}, status=HTTPStatus.NOT_FOUND)

    def _handle_auth_login(self) -> None:
        body = self._read_json_body()
        self._ensure_gateway_context()
        phone = str(body.get("phone", "")).strip()
        code = str(body.get("code", "")).strip()
        device_id = str(body.get("device_id", "")).strip()
        login_type = str(body.get("login_type", "sms_code")).strip()

        if not phone or not device_id:
            self._send_json(
                {"status_code": 422, "message": "phone and device_id are required", "data": None}
            )
            return
        if login_type != "sms_code":
            self._send_json({"status_code": 422, "message": "only sms_code is supported", "data": None})
            return
        if code != PRESET_SMS_CODE:
            self._send_json({"status_code": 422, "message": "invalid sms code", "data": None})
            return

        session_id = self._gateway_session_id
        trace_id = self._gateway_trace_id

        # Pass only if this session+phone+device has recently completed validate().
        if STATE.can_pass_login(session_id=session_id, phone=phone, device_id=device_id):
            token = f"demo_token_{uuid.uuid4().hex[:16]}"
            user_id = f"user_{phone[-4:]}"
            payload = {
                "status_code": 200,
                "message": "login success",
                "data": {
                    "token": token,
                    "expire_time": iso_expire(3600),
                    "user_id": user_id,
                },
            }
            self._send_json(payload)
            return

        # 100% risk trigger unless validation pass exists.
        challenge = STATE.create_login_challenge(
            phone=phone,
            device_id=device_id,
            session_id=session_id,
            trace_id=trace_id,
        )
        self._send_json(
            {
                "status_code": 40301,
                "message": "risk detected, captcha required",
                "data": {"login_key": challenge.login_key},
            }
        )

    def _handle_captcha_generate(self) -> None:
        body = self._read_json_body()
        self._ensure_gateway_context()
        login_key = str(body.get("login_key", "")).strip()
        scene = str(body.get("scene", "login")).strip()
        captcha_type = str(body.get("type", "slider")).strip()
        device_id = str(body.get("device_id", "")).strip()

        if scene != "login":
            self._json_error("scene must be login")
            return
        if captcha_type != "slider":
            self._json_error("only slider type is supported in this demo")
            return
        if not login_key:
            self._json_error("login_key is required")
            return

        challenge = STATE.get_challenge_by_login_key(login_key)
        if not challenge:
            self._json_error("login_key not found or expired", code=1002)
            return

        request_session = self._gateway_session_id
        if request_session != challenge.session_id:
            self._json_error("session mismatch with login challenge", code=1003)
            return
        if device_id != challenge.device_id:
            self._json_error("device_id mismatch with login challenge", code=1004)
            return

        data = STATE.issue_captcha(challenge)
        self._send_json({"code": 0, "message": "ok", "data": data})

    def _handle_captcha_verify(self) -> None:
        body = self._read_json_body()
        self._ensure_gateway_context()
        token = str(body.get("token", "")).strip()
        position = body.get("position", {}) if isinstance(body.get("position"), dict) else {}
        px = position.get("x")
        try:
            pos_x = int(px)
        except (TypeError, ValueError):
            pos_x = -10_000
        device_id = str(body.get("device_id", "")).strip()

        if not token:
            self._json_error("token is required")
            return

        challenge = STATE.get_challenge_by_captcha_token(token)
        if not challenge:
            self._json_error("captcha token invalid or expired", code=1005)
            return

        now = now_ts()
        if now > challenge.captcha_expire_at:
            self._json_error("captcha token expired", code=1006)
            return

        request_session = self._gateway_session_id
        if request_session != challenge.session_id:
            self._json_error("session mismatch", code=1007)
            return
        if device_id != challenge.device_id:
            self._json_error("device_id mismatch", code=1008)
            return

        success = abs(pos_x - challenge.expected_x) <= POSITION_TOLERANCE
        if not success:
            self._send_json({"code": 0, "message": "ok", "data": {"success": False}})
            return

        verify_token = make_id("vtk")
        with STATE.lock:
            challenge.status = "verified"
            challenge.verify_token = verify_token
            challenge.verify_expire_at = now + VERIFY_TOKEN_TTL_SEC
            STATE.verify_token_to_login_key[verify_token] = challenge.login_key

        self._send_json(
            {
                "code": 0,
                "message": "ok",
                "data": {
                    "success": True,
                    "verify_token": verify_token,
                    "expected_window": POSITION_TOLERANCE,
                },
            }
        )

    def _handle_captcha_validate(self, *, verify_token: str, login_key: str) -> None:
        self._ensure_gateway_context()
        if not verify_token or not login_key:
            self._json_error("token and login_key are required")
            return

        challenge = STATE.get_challenge_by_verify_token(verify_token)
        if not challenge or challenge.login_key != login_key:
            self._json_error("verify token/login key mismatch", code=1009)
            return
        if now_ts() > challenge.verify_expire_at:
            self._json_error("verify token expired", code=1010)
            return
        if challenge.validate_used:
            self._json_error("verify token already used", code=1011)
            return

        request_session = self._gateway_session_id
        if request_session != challenge.session_id:
            self._json_error("session mismatch", code=1012)
            return

        STATE.mark_validated(challenge)
        self._send_json(
            {
                "code": 0,
                "message": "gateway validated",
                "data": {"passed": True, "expire_in": PASS_TTL_SEC},
            }
        )


def main() -> None:
    STATIC_DIR.mkdir(parents=True, exist_ok=True)
    with ThreadingHTTPServer((HOST, PORT), DemoHandler) as server:
        print(f"Risk gateway demo listening on http://{HOST}:{PORT}")
        print("Preset SMS code:", PRESET_SMS_CODE)
        server.serve_forever()


if __name__ == "__main__":
    main()
