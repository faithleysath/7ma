# sevenma-sdk

Python SDK for APIs documented in `接口文档-定位地图登录详版.md`.

## Install

```bash
cd /Users/laysath/proj/7ma/python_sdk
pip install -e .
```

## Quick Start

```python
from sevenma_sdk import SevenMAClient

client = SevenMAClient(app_version="1.0.0")

# 1) Login
login_resp = client.wechat_login(
    code="0f3xWk000ABCDEF",
    device_id="iPhone_14_Pro_o1abcxyz",
)
print(login_resp)

# 2) Authorized request
shared = client.get_shared_key()
print(shared)

# 3) Location request
cars = client.get_new_surrounding_cars(latitude=36.06731, longitude=120.38291)
print(cars)
```

## API groups covered

- Auth/login:
  - `wechat_login`
  - `send_sms_login_code`
  - `login_with_sms_code`
  - `wechat_bind_phone`
  - `get_shared_key`
  - `legacy_authorization_code`
  - `legacy_auth_wechat`
- 40301 captcha:
  - `captcha_generate`
  - `captcha_verify`
  - `captcha_validate`
- Vehicle location:
  - `get_new_surrounding_cars`
  - `get_surrounding_cars`
  - `get_car_location`
  - `get_car_detail`
  - `get_car_lock_status`
  - `get_user_car_authority`
- Map/fence:
  - `get_parking_ranges`
  - `get_near_operation_area`
  - `get_at_operation_areas`
  - `get_parking_detail`
  - `get_bicycling_route`
  - `in_fences`
- WebSocket helpers:
  - `build_ws_car_location_payload`
  - `build_ws_in_fences_payload`
  - `build_ws_order_state_payload`

## Error handling

The client raises typed exceptions:

- `UnauthorizedError` for 401
- `CaptchaRequiredError` for business `status_code=40301`
- `RateLimitError` for 429 or business `status_code=600`
- `APIStatusError` for unexpected business `status_code`
- `APIHTTPError` for transport/non-2xx HTTP errors
