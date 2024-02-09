import reflex as rx
from ..State.firebaseConfig import firebase
from ..components import navbar
class FormState(rx.State):
    form_data: dict = {}

   #  def handle_submit(self, form_data: dict):
   #      """Handle the form submit."""
   #      self.form_data = form_data
        
def handle_submit(form_data):
        email = form_data.get("email")
        password = form_data.get("password")
        try:
            user = firebase.auth.sign_in_with_email_and_password(email, password)
            print("User signed in:", user)
        except Exception as e:
            print("Error:", e)
def signIn():
        return rx.form(
            rx.input(placeholder="Email", name="email"),
            rx.input(placeholder="Password", name="password", type_="password"),
            rx.button("Sign In", type_="submit", on_click=FormState.handle_submit)
        )