import reflex as rx
class ClientStorageState(rx.State):
    user: str = rx.Cookie("")
    currentUser: str = rx.LocalStorage("")
    custom_cookie: str = rx.Cookie(
        name="CustomNamedCookie", max_age=3600
    )