import reflex as rx
from ..components import about_page,navbar,footer

def about():
        return rx.container(
        navbar(),
        about_page(),
        footer(),
        style={"max-width": "100vw"} 
    )
    