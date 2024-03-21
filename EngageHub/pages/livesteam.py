import reflex as rx
from ..components import live
from ..components import navbar
from ..components import footer
from ..components import carousel
# from ..components import videoCarousel

def livestream():
    return rx.container(
        navbar(),
        # videoCarousel(),
        # carousel(),
        live(),
        footer(),
        style={"max-width": "100vw","width": "100vw", "margin": "0"}  # Ensure the entire livestream component spans the entire width of the page
    )
