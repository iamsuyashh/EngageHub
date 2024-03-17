import reflex as rx
from .eventinfo import eventInfo,navbar,footer
def EventInfoPage():   
   return rx.container(
            navbar(),
            eventInfo(),
            footer(),
            style={"max-width":"100vw"}
)