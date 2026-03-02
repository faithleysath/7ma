"""Minimal example for sevenma-sdk."""

from sevenma_sdk import CaptchaRequiredError, SevenMAClient


def main() -> None:
    client = SevenMAClient(app_version="demo-0.1.0")
    try:
        client.send_sms_login_code(
            phone="replace_with_real_phone",
            scene=1,
        )

        login = client.login_with_sms_code(
            phone="replace_with_real_phone",
            code="replace_with_real_sms_code",
            device_id="replace_with_real_device_id",
        )
        print("login:", login)
        print("token_expire_time_ms:", client.token_expire_time_ms)

        shared_key = client.get_shared_key()
        print("shared_key:", shared_key)

        cars = client.get_new_surrounding_cars(latitude=36.06731, longitude=120.38291)
        print("cars:", cars)
    except CaptchaRequiredError as exc:
        print("captcha required:", exc)
    finally:
        client.close()


if __name__ == "__main__":
    main()
