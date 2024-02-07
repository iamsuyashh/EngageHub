"""Welcome to Reflex! This file outlines the steps to create a basic app."""
from rxconfig import config
from EngageHub.components import navbar
from EngageHub.pages import home, signUp, signIn
import reflex as rx

docs_url = "https://reflex.dev/docs/getting-started/introduction"
filename = f"{config.app_name}/{config.app_name}.py"


class State(rx.State):
    """The app state."""

    pass


def index() -> rx.Component:
     return rx.vstack(
        home(),
       
        min_h="100vh",
        spacing="0",
    )


# Create app instance and add index page.
app = rx.App()
app.add_page(home, route="/")
app.add_page(signUp, route="/signUp")
app.add_page(signIn, route="/signIn")
app.compile()