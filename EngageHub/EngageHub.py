"""Welcome to Reflex! This file outlines the steps to create a basic app."""
from rxconfig import config
from EngageHub.components import navbar , gallery_cards
from EngageHub.pages import galleryPage, home, signUp, signIn,register,event,about,eventinfo
from EngageHub.State.firebaseConfig import auth
import reflex as rx

docs_url = "https://reflex.dev/docs/getting-started/introduction"
filename = f"{config.app_name}/{config.app_name}.py"

class State(rx.State):
    is_authenticated: bool = False
    is_admin: bool = False

    def do_login(self, username, password):
        # Perform authentication logic here
        # Set is_authenticated and is_admin based on the authentication result
        self.is_authenticated = False
        self.is_admin = False  # Set to True if the user is an admin

    def do_logout(self):
        # Perform logout logic here
        self.is_authenticated = False
        self.is_admin = False

state = State()

def login(username, password):
    state.do_login(username, password)

def logout():
    state.do_logout()

def check_login():
    try:
        user = auth.current_user
        print(user)
        return True if user else False
    except:
        return False

def check_admin():
    return state.is_admin


def index() -> rx.Component:
    if check_login():
        return rx.vstack(
            home(),

            min_h="100vh",
            bg="#F8F8FA",
            spacing="0",
        )    
    else:
        rx.redirect("/signIn")                     

# Create app instance and add index page.
app = rx.App()
app.add_page(home, route="/")
app.add_page(signUp, route="/signUp")
app.add_page(signIn, route="/signIn")
app.add_page(register, route="/register")
app.add_page(galleryPage,route="/eventgallery")
app.add_page(event,route="/event")
app.add_page(about,route="/about")
app.add_page(eventinfo,route="/eventdetails")
app.compile()