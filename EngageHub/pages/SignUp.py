import reflex as rx
from ..components import navbar
def signUp():
    """Sign Up Page."""
    return rx.container(
        
       navbar(),
       rx.text("Sign Up page"),
       style={"max-width": "100vw"}
    )