import reflex as rx
from .eventinfo import navbar,footer
def EventInfoPage() -> rx.Component:   
   return rx.container(
            navbar(),
            footer(),
            style={"max-width":"100vw"}
)