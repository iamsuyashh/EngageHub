import reflex as rx
from ..components import sidebar
from ..components import event_form

def event():
    return rx.container(
        sidebar(),
        event_form(),
        style={"margin": "5rem auto", "padding": "1rem", "text-align": "center","width":"100vw","height":"100vh"}

    )