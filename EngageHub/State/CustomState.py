import reflex as rx
class ClientStorageState(rx.State):
    my_cookie: str = rx.Cookie("")
    my_local_storage: str = rx.LocalStorage("")
    custom_cookie: str = rx.Cookie(
        name="CustomNamedCookie", max_age=3600
    )
