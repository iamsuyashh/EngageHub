import reflex as rx
class ClientStorageState(rx.State):
    my_cookie: str = rx.Cookie(name="userCred")
    my_local_storage: str = rx.LocalStorage("")
    custom_cookie: str = rx.Cookie(
        name="CustomNamedCookie", max_age=3600
    )
class LocalStorageState(rx.State):
    # local storage with default settings
    l1: str = rx.LocalStorage()

    # local storage with custom settings
    l2: str = rx.LocalStorage("l2 default")
    l3: str = rx.LocalStorage(name="l3")
class UserCredentials(rx.State):
    username: str = rx.LocalStorage()
    password: str = rx.LocalStorage("password")

class UserState(rx.State):
    authenticated: bool = False
    role: str = "user"  # Default role is user
class GlobalState(rx.State):
    eventName: str = None
# Create an instance of the UserState
user_state = UserState()
