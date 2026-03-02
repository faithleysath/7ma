"""Custom exceptions for the SevenMA SDK."""

from __future__ import annotations

from typing import Any, Optional


class SevenMAError(Exception):
    """Base error for this SDK."""


class APIHTTPError(SevenMAError):
    """Raised when the HTTP layer fails or returns non-2xx."""

    def __init__(
        self,
        message: str,
        *,
        http_status: Optional[int] = None,
        payload: Any = None,
    ) -> None:
        super().__init__(message)
        self.http_status = http_status
        self.payload = payload


class APIStatusError(SevenMAError):
    """Raised when `status_code` in API JSON payload is not expected."""

    def __init__(self, message: str, *, status_code: Optional[int] = None, payload: Any = None) -> None:
        super().__init__(message)
        self.status_code = status_code
        self.payload = payload


class UnauthorizedError(APIStatusError):
    """Raised when token is invalid or expired (401)."""


class CaptchaRequiredError(APIStatusError):
    """Raised when API returns anti-bot challenge status_code=40301."""


class RateLimitError(APIStatusError):
    """Raised when API signals rate limiting or temporary outage (429/600)."""
