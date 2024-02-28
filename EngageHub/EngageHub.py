"""Welcome to Reflex! This file outlines the steps to create a basic app."""
from rxconfig import config
from EngageHub.components import navbar , gallery_cards
from EngageHub.pages import galleryPage, home, signUp, signIn,register,event,about,eventinfo
import reflex as rx

docs_url = "https://reflex.dev/docs/getting-started/introduction"
filename = f"{config.app_name}/{config.app_name}.py"

class FormState(rx.State):
    form_data: dict = {}

    def handle_submit(self, form_data: dict):
        """Handle the form submit."""
        self.form_data = form_data

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
app.add_page(register, route="/register")
app.add_page(gallery_cards,route="/gallery")
app.add_page(event,route="/event")
app.add_page(about,route="/about")
app.add_page(eventinfo,route="/eventdetails")


app.compile()