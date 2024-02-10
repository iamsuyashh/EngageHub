import reflex as rx
from ..components import navbar
from ..components import signup_form
def signUp():
    """Sign Up Page."""
    return rx.container(
        
      navbar(),
      rx.heading("Sign up" , color = "indigo"),
      signup_form(),
      style={"max-width": "100vw","text-align": "center"}
    )