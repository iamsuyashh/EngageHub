"""The home page. This file includes examples abstracting complex UI into smaller components."""
import reflex as rx
from ..components import navbar, footer

def home():
    """The home page."""
    return rx.container(
        
       navbar(),
       footer(),
       style={"max-width": "100vw"}
    )