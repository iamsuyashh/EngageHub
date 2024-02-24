import reflex as rx
from ..State.firebaseConfig import auth, add_user_to_firestore
from ..State.CustomState import ClientStorageState
currentUser : str = rx.LocalStorage("")
def handle_Form_Submit(form_data):
    email = form_data.get("email")  # Access form_data correctly
    password = form_data.get("password")
    print("Email:",email)
    print("Password:",password)

    try:
        user = auth.sign_in_with_email_and_password(email, password)
        ClientStorageState.set_my_local_storage = "Vaibhav"
        add_user_to_firestore("user","user.email")
        print("User signed in:", user)
        rx.redirect('/')
        return rx.window_alert("LogIn SuccessFull")
        # Here you can perform any additional actions after successful sign-in
    except Exception as e:
        print("Error:", e)
        # Handle sign-in error, e.g., display error message to the user

    return rx.text("Sign-in successful!")  # Example response after sign-in
class FormData(rx.State):
    form_data: dict = {}

    def handle_submit(self, form_data: dict):
        """Handle the form submit."""
        self.form_data = form_data
        print(form_data)
        rx.window_alert("Hello")
        handle_Form_Submit(form_data)

def form_example():
    return rx.vstack(
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
            on_submit=FormData.handle_submit,
            reset_on_submit=True,
            style={ "padding" : "2em", "width" : "500px", "margin-top" : "3em"}
        ),
    )