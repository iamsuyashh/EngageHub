"""Welcome to Reflex! This file outlines the steps to create a basic app."""
from rxconfig import config
from EngageHub.components import navbar
import reflex as rx

docs_url = "https://reflex.dev/docs/getting-started/introduction"
filename = f"{config.app_name}/{config.app_name}.py"


class State(rx.State):
    """The app state."""

    pass


def index() -> rx.Component:
     return rx.vstack(
        navbar(),
        # chat.chat(),
        # chat.action_bar(),
        # sidebar(),
        # modal(),
        # bg=styles.bg_dark_color,
        # color=styles.text_light_color,
        min_h="100vh",
        align_items="stretch",
        spacing="0",
    )


# Create app instance and add index page.
app = rx.App()
app.add_page(index)
app.compile()