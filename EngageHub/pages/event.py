import reflex as rx
from ..components import sidebar
from ..components import event_form

def event():
    return rx.container(
        sidebar(),
        event_form(),
        style={"max-width": "100vw"} 
    )