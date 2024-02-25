import reflex as rx
from ..components import navbar
from ..components import form_example
def signIn():
    return rx.container(
      navbar(),
      rx.heading("Login" , color = "indigo"),
      form_example(),
      style={"max-width": "100vw","text-align": "center","background-color":"#F8F8FA"}
    )