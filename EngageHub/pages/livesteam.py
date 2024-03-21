import reflex as rx
from ..components import live
from ..components import navbar
from ..components import footer
from ..components import carousel
from ..State.firebaseConfig import read_live_stream_link
# from ..components import videoCarousel

def livestream():
    url = read_live_stream_link()
    link = url["link"]
    return rx.container(
        navbar(),
        # videoCarousel(),
        # carousel(),
        live(link),
        footer(),
        style={"max-width": "100vw","width": "100vw", "margin": "0"}  # Ensure the entire livestream component spans the entire width of the page
    )
