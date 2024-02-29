import reflex as rx

from ..components import event_details,navbar,footer

def eventinfo():
    return rx.container(
        navbar(),
        event_details(),
        footer(),
        style={"max-width":"100vw"}
    )
    