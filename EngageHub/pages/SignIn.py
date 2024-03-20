import reflex as rx
from ..components import navbar
from ..components import form_example
from ..State.firebaseConfig import auth
from ..State.auth_session import AuthSession
from ..State.auth_state import AuthState

class LoginData(rx.State):
    form_data: dict = {}
    is_logged_in: str = rx.Cookie(name="is_logged_in")
    def handle_submit(self, form_data: dict):
        """Handle the form submit."""
        email = form_data.get("email")  # Access form_data correctly
        password = form_data.get("password")
        rx.redirect("/")
        self.form_data = form_data
        # if 
        try:
            if not all(form_data.values()):
                return rx.window_alert("Please fill in all fields.")
            else:
                user = auth.sign_in_with_email_and_password(email,password)
                if user:
                    # setattr(LoginData, 'is_logged_in', "false" if LoginData.is_logged_in == "true" else "true")
                    AuthState.set_is_logged_in = "true"
                    return rx.redirect("/")
                else:
                    return rx.window_alert("Invalid username or password.")
        except Exception as e:
            return rx.window_alert(e)
def signIn():
    return rx.container(
      navbar(),
      rx.spacer(),
      rx.heading("Login" , color = "indigo"),
      rx.vstack(
      rx.form(
            rx.vstack(
                rx.input(
                    placeholder="Enter your email",
                    name="email",
                    style={"margin-bottom" : "1em"},
                    margin_bottom="1em",
                    type_="email",
                    width = "100%"
                ),
                rx.input(
                    placeholder="Enter Password",
                    name="password",
                    type_="password",
                    style={"margin-bottom" : "1em"},
                    margin_bottom="1em",
                    width = "100%"),
                rx.button("Login", type_="submit" , bg = "indigo" , color = "white",variant="outline" , margin_top = "5em" , style={"margin-top" : "3em"}),
            ),
            on_submit=LoginData.handle_submit,
            reset_on_submit=True,
            style={ "padding" : "2em", "width" : "500px", "margin-top" : "3em"}
        ),
      ),
      style={"max-width": "100vw","height":"100vh","text-align": "center","background-color":"#F8F8FA"}
    )