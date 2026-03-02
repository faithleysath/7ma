"""SDK client for 7ma auth/location/map endpoints."""

from __future__ import annotations

from datetime import datetime
from typing import Any, Dict, Iterable, Mapping, Optional, Sequence, Set

import requests

from .exceptions import APIHTTPError, APIStatusError, CaptchaRequiredError, RateLimitError, UnauthorizedError

WS_BIZ_IDS: Dict[str, int] = {
    "in_fences": 3004,
    "order_state": 3005,
    "car_location": 3006,
}


class SevenMAClient:
    """A thin Python client for the APIs documented in `接口文档-定位地图登录详版.md`."""

    def __init__(
        self,
        *,
        api_base_url: str = "https://newmapi.7mate.cn/api/v1",
        auth_base_url: str = "https://newmapi.7mate.cn/auth",
        websocket_url: str = "wss://wss.7mate.cn:9501",
        timeout: float = 15.0,
        session: Optional[requests.Session] = None,
        token: Optional[str] = None,
        app_version: str = "python-sdk",
        client_name: str = "Wechat_MiniAPP",
        phone_model: Optional[str] = None,
        phone_brand: Optional[str] = None,
        phone_system: Optional[str] = None,
        phone_system_version: Optional[str] = None,
        trace_id: Optional[str] = None,
        user_id: Optional[str] = None,
        genie_lamp_session: Optional[str] = None,
    ) -> None:
        self.api_base_url = api_base_url.rstrip("/")
        self.auth_base_url = auth_base_url.rstrip("/")
        self.websocket_url = websocket_url
        self.timeout = timeout

        self.session = session or requests.Session()

        self.token: Optional[str] = token
        self.token_expire_time_ms: Optional[int] = None

        self.app_version = app_version
        self.client_name = client_name
        self.phone_model = phone_model
        self.phone_brand = phone_brand
        self.phone_system = phone_system
        self.phone_system_version = phone_system_version
        self.trace_id = trace_id
        self.user_id = user_id
        self.genie_lamp_session = genie_lamp_session

    def close(self) -> None:
        """Close underlying HTTP session."""
        self.session.close()

    def __enter__(self) -> "SevenMAClient":
        return self

    def __exit__(self, exc_type: Any, exc: Any, tb: Any) -> None:
        self.close()

    def set_token(self, token: str, expire_time: Optional[Any] = None) -> None:
        """Set bearer token and optional expire time."""
        self.token = token
        if expire_time is not None:
            self.token_expire_time_ms = self._parse_expire_time_ms(expire_time)

    def clear_token(self) -> None:
        """Clear local token state."""
        self.token = None
        self.token_expire_time_ms = None

    def is_token_expired(self, *, now_ms: Optional[int] = None, leeway_ms: int = 0) -> bool:
        """Return True if current token is missing or past expire time."""
        if not self.token:
            return True
        if self.token_expire_time_ms is None:
            return False
        current = now_ms if now_ms is not None else int(datetime.now().timestamp() * 1000)
        return current + leeway_ms >= self.token_expire_time_ms

    def update_context_headers(
        self,
        *,
        trace_id: Optional[str] = None,
        user_id: Optional[str] = None,
        genie_lamp_session: Optional[str] = None,
    ) -> None:
        """Update optional runtime headers used by upstream gateway."""
        if trace_id is not None:
            self.trace_id = trace_id
        if user_id is not None:
            self.user_id = user_id
        if genie_lamp_session is not None:
            self.genie_lamp_session = genie_lamp_session

    # -------------------------------------------------------------------------
    # Auth/login APIs
    # -------------------------------------------------------------------------
    def send_sms_login_code(self, *, phone: str, scene: int = 1, sms_type: str = "login") -> Any:
        payload = {"phone": phone.replace(" ", ""), "type": sms_type, "scene": scene}
        return self._request(
            "POST",
            "/sms/send",
            service="auth",
            json_body=payload,
            allowed_status_codes={200, 406},
        )

    def login_with_sms_code(
        self,
        *,
        phone: str,
        code: str,
        device_id: str,
        force_new_account: Optional[bool] = None,
        restore_confirm: Optional[bool] = None,
    ) -> Any:
        payload: Dict[str, Any] = {
            "phone": phone,
            "code": code,
            "login_type": "sms_code",
            "device_id": device_id,
        }
        if force_new_account is not None:
            payload["force_new_account"] = force_new_account
        if restore_confirm is not None:
            payload["restore_confirm"] = restore_confirm

        result = self._request(
            "POST",
            "/login",
            service="auth",
            json_body=payload,
            allowed_status_codes={200, 403001},
        )
        self._save_token_from_payload(result)
        return result

    def get_shared_key(self) -> Any:
        return self._request("GET", "/shared_key", service="auth")

    # -------------------------------------------------------------------------
    # 40301 captcha APIs
    # -------------------------------------------------------------------------
    def captcha_generate(
        self,
        *,
        scene: str,
        device_id: str,
        login_key: str,
        client_info: Mapping[str, Any],
        captcha_type: str = "slider",
    ) -> Any:
        payload = {
            "scene": scene,
            "device_id": device_id,
            "login_key": login_key,
            "client_info": dict(client_info),
            "type": captcha_type,
        }
        return self._request(
            "POST",
            "/captcha/polaris/captcha/generate",
            service="auth",
            json_body=payload,
            allowed_status_codes=None,
        )

    def captcha_verify(
        self,
        *,
        token: str,
        position: Mapping[str, Any],
        track: Sequence[Mapping[str, Any]],
        device_id: str,
        duration: int,
    ) -> Any:
        payload = {
            "token": token,
            "position": dict(position),
            "track": [dict(item) for item in track],
            "device_id": device_id,
            "duration": duration,
        }
        return self._request(
            "POST",
            "/captcha/polaris/captcha/verify",
            service="auth",
            json_body=payload,
            allowed_status_codes=None,
        )

    def captcha_validate(self, *, verify_token: str, login_key: str) -> Any:
        return self._request(
            "GET",
            "/captcha/validate",
            service="auth",
            params={"token": verify_token, "login_key": login_key},
            allowed_status_codes=None,
        )

    # -------------------------------------------------------------------------
    # Location APIs
    # -------------------------------------------------------------------------
    def get_new_surrounding_cars(self, *, latitude: float, longitude: float) -> Any:
        return self._request(
            "GET",
            "/new/surrounding/car",
            service="api",
            params={"latitude": latitude, "longitude": longitude},
        )

    def get_surrounding_cars(self, *, latitude: float, longitude: float) -> Any:
        return self._request(
            "GET",
            "/surrounding/car",
            service="api",
            params={"latitude": latitude, "longitude": longitude},
        )

    def get_car_location(
        self,
        *,
        car_number: str,
        longitude: Optional[float] = None,
        latitude: Optional[float] = None,
    ) -> Any:
        params: Dict[str, Any] = {}
        if longitude is not None:
            params["longitude"] = longitude
        if latitude is not None:
            params["latitude"] = latitude
        return self._request(
            "GET",
            f"/car/{car_number}/location",
            service="api",
            params=params or None,
        )

    def get_car_detail(self, *, car_number: str) -> Any:
        return self._request("GET", f"/car/{car_number}", service="api")

    def get_car_lock_status(self, *, car_number: str) -> Any:
        return self._request("GET", f"/car/{car_number}/lockStatus", service="api")

    def get_user_car_authority(self) -> Any:
        return self._request("GET", "/user/car_authority", service="api")

    # -------------------------------------------------------------------------
    # Map/fence APIs
    # -------------------------------------------------------------------------
    def get_parking_ranges(self, *, longitude: float, latitude: float) -> Any:
        return self._request(
            "GET",
            "/parking_ranges",
            service="api",
            params={"longitude": longitude, "latitude": latitude},
        )

    def get_near_operation_area(self, *, longitude: float, latitude: float) -> Any:
        return self._request(
            "GET",
            "/nearOperationArea",
            service="api",
            params={"longitude": longitude, "latitude": latitude},
        )

    def get_at_operation_areas(self, *, latitude: float, longitude: float) -> Any:
        return self._request(
            "GET",
            "/atoperationAreas",
            service="api",
            params={"latitude": latitude, "longitude": longitude},
        )

    def get_parking_detail(self, *, parking_id: int, longitude: float, latitude: float) -> Any:
        return self._request(
            "GET",
            f"/parking/{parking_id}/detail",
            service="api",
            params={"longitude": longitude, "latitude": latitude},
        )

    def get_bicycling_route(
        self,
        *,
        origin_longitude: float,
        origin_latitude: float,
        destination_longitude: float,
        destination_latitude: float,
    ) -> Any:
        return self._request(
            "GET",
            "/bicycling",
            service="api",
            params={
                "origin": f"{origin_longitude},{origin_latitude}",
                "destination": f"{destination_longitude},{destination_latitude}",
            },
        )

    def in_fences(
        self,
        *,
        points: str,
        back_type: Optional[str] = None,
        latitude: Optional[float] = None,
        longitude: Optional[float] = None,
        lock_status: Optional[str] = None,
        action_type: Optional[str] = None,
        yunjia_in_fence: Optional[int] = None,
    ) -> Any:
        params: Dict[str, Any] = {"points": points}
        if back_type is not None:
            params["back_type"] = back_type
        if latitude is not None:
            params["latitude"] = latitude
        if longitude is not None:
            params["longitude"] = longitude
        if lock_status is not None:
            params["lock_status"] = lock_status
        if action_type is not None:
            params["action_type"] = action_type
        if yunjia_in_fence is not None:
            params["yunjia_in_fence"] = yunjia_in_fence
        return self._request("GET", "/in_fences", service="api", params=params)

    # -------------------------------------------------------------------------
    # WebSocket payload builders (documented IDs and payload shapes)
    # -------------------------------------------------------------------------
    @staticmethod
    def build_ws_car_location_payload(*, car_number: str, longitude: float, latitude: float, timeout: int = 20000) -> Dict[str, Any]:
        return {
            "biz_id": WS_BIZ_IDS["car_location"],
            "data": {"number": car_number, "longitude": longitude, "latitude": latitude},
            "timeout": timeout,
        }

    @staticmethod
    def build_ws_in_fences_payload(
        *,
        points: str,
        timeout: int = 20000,
        back_type: Optional[str] = None,
        latitude: Optional[float] = None,
        longitude: Optional[float] = None,
        lock_status: Optional[str] = None,
        action_type: Optional[str] = None,
        yunjia_in_fence: Optional[int] = None,
    ) -> Dict[str, Any]:
        data: Dict[str, Any] = {"points": points}
        if back_type is not None:
            data["back_type"] = back_type
        if latitude is not None:
            data["latitude"] = latitude
        if longitude is not None:
            data["longitude"] = longitude
        if lock_status is not None:
            data["lock_status"] = lock_status
        if action_type is not None:
            data["action_type"] = action_type
        if yunjia_in_fence is not None:
            data["yunjia_in_fence"] = yunjia_in_fence
        return {"biz_id": WS_BIZ_IDS["in_fences"], "data": data, "timeout": timeout}

    @staticmethod
    def build_ws_order_state_payload(*, timeout: int = 20000, data: Optional[Mapping[str, Any]] = None) -> Dict[str, Any]:
        return {
            "biz_id": WS_BIZ_IDS["order_state"],
            "data": dict(data or {}),
            "timeout": timeout,
        }

    # -------------------------------------------------------------------------
    # Generic request helper
    # -------------------------------------------------------------------------
    def request(
        self,
        *,
        method: str,
        path: str,
        service: str = "api",
        params: Optional[Mapping[str, Any]] = None,
        json_body: Optional[Mapping[str, Any]] = None,
        headers: Optional[Mapping[str, str]] = None,
        allowed_status_codes: Optional[Iterable[int]] = (200,),
        timeout: Optional[float] = None,
    ) -> Any:
        return self._request(
            method=method,
            path=path,
            service=service,
            params=params,
            json_body=json_body,
            headers=headers,
            allowed_status_codes=allowed_status_codes,
            timeout=timeout,
        )

    def _request(
        self,
        method: str,
        path: str,
        *,
        service: str,
        params: Optional[Mapping[str, Any]] = None,
        json_body: Optional[Mapping[str, Any]] = None,
        headers: Optional[Mapping[str, str]] = None,
        allowed_status_codes: Optional[Iterable[int]] = (200,),
        timeout: Optional[float] = None,
    ) -> Any:
        url = self._build_url(service, path)
        request_headers = self._build_headers(headers)
        timeout_val = self.timeout if timeout is None else timeout

        try:
            resp = self.session.request(
                method=method.upper(),
                url=url,
                params=params,
                json=json_body,
                headers=request_headers,
                timeout=timeout_val,
            )
        except requests.RequestException as exc:
            raise APIHTTPError(f"HTTP request failed: {exc}") from exc

        payload = self._decode_response_payload(resp)
        business_code = self._extract_status_code(payload)
        message = self._extract_message(payload)

        if resp.status_code == 401 or business_code == 401:
            self.clear_token()
            raise UnauthorizedError(message or "Unauthorized", status_code=401, payload=payload)

        if business_code == 40301:
            raise CaptchaRequiredError(message or "Captcha required", status_code=40301, payload=payload)

        if resp.status_code == 429 or business_code in {429, 600}:
            code = 429 if resp.status_code == 429 else business_code
            raise RateLimitError(message or "Rate limited", status_code=code, payload=payload)

        if not resp.ok:
            raise APIHTTPError(
                message or f"HTTP error {resp.status_code}",
                http_status=resp.status_code,
                payload=payload,
            )

        if allowed_status_codes is not None and business_code is not None:
            allowed_set: Set[int] = {int(code) for code in allowed_status_codes}
            if business_code not in allowed_set:
                raise APIStatusError(
                    message or f"Unexpected status_code={business_code}",
                    status_code=business_code,
                    payload=payload,
                )

        return payload

    def _build_url(self, service: str, path: str) -> str:
        clean_path = path if path.startswith("/") else f"/{path}"
        if service == "api":
            return f"{self.api_base_url}{clean_path}"
        if service == "auth":
            return f"{self.auth_base_url}{clean_path}"
        if service == "absolute":
            return path
        raise ValueError(f"Unknown service '{service}', expected api/auth/absolute")

    def _build_headers(self, extra_headers: Optional[Mapping[str, str]]) -> Dict[str, str]:
        headers: Dict[str, str] = {
            "Accept": "application/vnd.ws.v1+json",
            "Client": self.client_name,
            "App-Version": self.app_version,
        }
        if self.phone_model:
            headers["Phone-Model"] = self.phone_model
        if self.phone_brand:
            headers["Phone-Brand"] = self.phone_brand
        if self.phone_system:
            headers["Phone-System"] = self.phone_system
        if self.phone_system_version:
            headers["Phone-System-Version"] = self.phone_system_version

        if self.token:
            headers["Authorization"] = f"Bearer {self.token}"
        if self.trace_id:
            headers["X-Trace-Id"] = self.trace_id
        if self.user_id:
            headers["U-User-Id"] = self.user_id
        if self.genie_lamp_session:
            headers["GenieLamp-H-session"] = self.genie_lamp_session

        if extra_headers:
            headers.update(dict(extra_headers))
        return headers

    @staticmethod
    def _decode_response_payload(resp: requests.Response) -> Any:
        try:
            return resp.json()
        except ValueError:
            return {"http_status": resp.status_code, "raw_text": resp.text}

    @staticmethod
    def _extract_status_code(payload: Any) -> Optional[int]:
        if not isinstance(payload, Mapping):
            return None
        value = payload.get("status_code")
        if isinstance(value, int):
            return value
        if isinstance(value, str):
            digits = value.strip()
            if digits.isdigit():
                return int(digits)
        return None

    @staticmethod
    def _extract_message(payload: Any) -> str:
        if isinstance(payload, Mapping):
            msg = payload.get("message")
            if isinstance(msg, str):
                return msg
        return ""

    def _save_token_from_payload(self, payload: Any) -> None:
        if not isinstance(payload, Mapping):
            return
        data = payload.get("data")
        if not isinstance(data, Mapping):
            return
        token = data.get("token")
        if isinstance(token, str) and token:
            self.token = token
        expire_time = data.get("expire_time")
        if expire_time is not None:
            self.token_expire_time_ms = self._parse_expire_time_ms(expire_time)

    @staticmethod
    def _parse_expire_time_ms(expire_time: Any) -> Optional[int]:
        if expire_time is None:
            return None

        if isinstance(expire_time, (int, float)):
            value = int(expire_time)
            if value > 10_000_000_000:
                return value
            return value * 1000

        if isinstance(expire_time, str):
            clean = expire_time.strip()
            if clean.isdigit():
                value = int(clean)
                if value > 10_000_000_000:
                    return value
                return value * 1000
            for fmt in ("%Y-%m-%d %H:%M:%S", "%Y/%m/%d %H:%M:%S", "%Y-%m-%dT%H:%M:%S"):
                try:
                    dt = datetime.strptime(clean, fmt)
                    return int(dt.timestamp() * 1000)
                except ValueError:
                    continue

        return None
