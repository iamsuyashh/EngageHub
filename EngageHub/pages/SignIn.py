import reflex as rx
from ..components import navbar
from ..components import form_example
def signIn():
    return rx.container(
      navbar(),
      rx.spacer(),
      rx.heading("Login" , color = "indigo"),
      form_example(),
        # print("Current User:", userCred)
      style={"max-width": "100vw","height":"100vh","text-align": "center","background-color":"#F8F8FA"}
    )