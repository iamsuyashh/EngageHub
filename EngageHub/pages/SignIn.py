import reflex as rx
from ..components import navbar
def signIn():
    """Log In Page."""
    return rx.container(
       navbar(),
       rx.text("Log In page"),
       style={"max-width": "100vw"}
    )