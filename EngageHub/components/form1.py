import reflex as rx
from ..State.firebaseConfig import auth, add_user_to_firestore
class RegisterData(rx.State):
    form_data: dict = {}

    def handle_submit(self, form_data: dict):
            """Handle the form submit."""
            self.form_data = form_data
            username = form_data.get("email")
            password = form_data.get("password")
            
    

            try:
                user = auth.create_user_with_email_and_password(username,password)
                add_user_to_firestore(form_data)
                auth.current_user = user
                auth.send_email_verification(user['idToken'])
                print("User Cred: ", user)
                print(auth.current_user)

            except Exception as e:
                print("Error:", e)

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
                    name="email",
                    type_="email",
                    style={"margin-bottom" : "1em"},
                    margin_bottom="1em",                                    
                    width = "100%"
                ),
                rx.input(
                    placeholder="Enter Your phone number",
                    name="number",
                    type_="tel",
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
                rx.container(rx.button("Login", type_="submit" , bg = "indigo" , color = "white",variant="outline" , margin_top = "5em" , style={"margin-top" : "3em"}),  
                )
                
            ),
            on_submit=RegisterData.handle_submit,
            reset_on_submit=True,
            style={ "padding" : "2em", "width" : "500px", "margin-top" : "3em"}
        ),
    )