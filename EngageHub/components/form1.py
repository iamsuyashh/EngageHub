import reflex as rx
from ..State.firebaseConfig import auth
class RegisterData(rx.State):
    form_data: dict = {}

    def handle_submit(self, form_data: dict):
            """Handle the form submit."""
            self.form_data = form_data
            print(form_data)
            # auth.create_user_with_email_and_password()
    # def getData():
         
         
def signup_form():
    return rx.vstack(
        rx.form(
            rx.vstack(
                rx.input(
                    placeholder="Enter your Name",
                    name="event_title",
                    style={"margin-bottom" : "1em"},
                    # margin_bottom="1em",
                    width = "100%"
                ),
                rx.input(
                    placeholder="Enter your email",
                    name="event_title",
                     type_="email",
                    style={"margin-bottom" : "1em"},
                    margin_bottom="1em",
                    width = "100%"
                ),
                rx.input(
                    placeholder="Enter Your phone number",
                    name="number",
                    type_="number",
                    style={"margin-bottom" : "1em"},
                    margin_bottom="1em",
                    width = "100%"),
                rx.input(
                    placeholder="Enter Your Password",
                    name="password",
                    type_="password",
                    style={"margin-bottom" : "1em"},
                    margin_bottom="1em",
                    width = "100%"),
                rx.button("Login", type_="submit" , bg = "indigo" , color = "white",variant="outline" , margin_top = "5em" , style={"margin-top" : "3em"}),
            ),
            on_submit=RegisterData.handle_submit,
            reset_on_submit=True,
            style={ "padding" : "2em", "width" : "500px", "margin-top" : "3em"}
        ),
    )