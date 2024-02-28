import reflex as rx
from ..components import event_details

def eventinfo():
    return rx.container(
        event_details(), 
    )