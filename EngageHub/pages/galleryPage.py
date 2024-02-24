import reflex as rx
from ..components import navbar
from ..components.gallery import gallery_cards

def galleryPage():
    return rx.container(
        navbar(),
        style={"max-width": "100vw"} 
    )