# Demo Risk Gateway

## What this demo includes

- A mini Python gateway (`server.py`) that simulates:
  - `POST /auth/login` (SMS code login, always risk-challenged first)
  - `POST /auth/captcha/polaris/captcha/generate`
  - `POST /auth/captcha/polaris/captcha/verify`
  - `GET /auth/captcha/validate`
- A single-page frontend (`static/index.html`) with:
  - phone + sms code inputs
  - login button
  - slider captcha UI
  - automatic login retry after captcha validate

## Requirements

- Python 3.9+
- Pillow (`pip install pillow`)

## Run

```bash
python3 demo_risk_gateway/server.py
```

Then open:

```text
http://127.0.0.1:8080/
```

Preset SMS code:

```text
999222
```

## Simulated logic notes

- Login returns `status_code=40301` unless the same `(GenieLamp-H-session, phone, device_id)` context has just passed `validate`.
- Slider verify is simplified:
  - only checks final `position.x` within tolerance.
- Captcha images are generated with Pillow and returned as data URLs.
- Response headers always carry:
  - `GenieLamp-H-session`
  - `X-Trace-Id`

