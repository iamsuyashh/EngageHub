import reflex as rx
from ..components import navbar
from ..components import gallery_cards

def gallery():
    return rx.container(
        navbar(),
        gallery_cards(),
        style={"max-width": "100vw"} 
    )