import reflex as rx
from ..components import navbar
from ..components import register_form
def register():
    return rx.container(
      navbar(),
      rx.heading("Register" , color = "indigo"),
      register_form(),
      style={"max-width": "100vw","text-align": "center","background-color":"#F8F8FA"}
    )