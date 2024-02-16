import reflex as rx
from ..components import navbar
from ..components import event_form

def event():
    return rx.container(
        navbar(),
        event_form(),
        style={"max-width": "100vw"} 
    )