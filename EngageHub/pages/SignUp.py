import reflex as rx
from ..components import navbar
from ..components import signup_form
from ..State.firebaseConfig import auth
def register_email_password():
    print()
def signUp():
    """Sign Up Page."""
    return rx.container(
      navbar(),
      rx.heading("Sign up" , color = "indigo"),
      signup_form(),
      style={"max-width": "100vw","text-align": "center","background-color":"#F8F8FA"}
    )