import reflex as rx
from firebase_admin import auth
from firebase_admin.exceptions import FirebaseError
# from .firebaseConfig import auth
import datetime

AUTH_TOKEN_LOCAL_STORAGE_KEY = "_auth_tokens"
class ClientStorageState(rx.State):
    login_status: str = rx.LocalStorage("")
class LocalStorageState(rx.State):
    # local storage with default settings
    l1: str = rx.LocalStorage()

    # local storage with custom settings
    l2: str = rx.LocalStorage("l2 default")
    l3: str = rx.LocalStorage(name="l3")
class UserCredentials(rx.State):
    username: str = rx.LocalStorage()
    password: str = rx.LocalStorage("password")
class GlobalState(rx.State):
    eventName: str = None

