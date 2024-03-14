import reflex as rx
class RegisterFormData(rx.State):
    form_data: dict = {}

    def handle_submit(self, form_data: dict):
        """Handle the form submit."""
        self.form_data = form_data
       
        print(form_data)
        rx.window_alert("Hello")
        handle_Form_Submit(form_data)
def handle_Form_Submit(form_data):
    name = form_data.get("name")  # Access form_data correctly
    email = form_data.get("email")
    pid = form_data.get("pid_number")
    ph_Number = form_data.get("ph_number")
    print("Name:",name)
    print("Email:",email)
    print("PID:",pid)
    print("Phone Number:",ph_Number)

    try:
            # user = auth.sign_in_with_email_and_password(email, password)
            # UserCredentials.set_my_local_storage = "Vaibhav"
            # add_user_to_firestore("user","user.email")
            # print("User signed in:", user["email"])
            # credentials.username = "Vaibhav"
            # user_state.authenticated = True
            # userEmail = user["email"]
            # print("User Email: ", userEmail)
            # ClStorage.currentUser = "Vaibhav"
            # print("User State: ", ClStorage.currentUser)
            # ClStorage.set_currentUser
            # currentUser("Vaibhav")
            # UserCredentials.add_var()
            # UserStorage.set_user_email("Vaibhav@gmail.com")
            rx.chakra.alert(
            rx.chakra.alert_icon(),
            rx.chakra.alert_title(
                "Error Reflex version is out of date."
            ),
            status="error",
            ),
            # print("Username: ",credentials.username)
            # rx.script("")
            # userCred = auth.current_user()
            return rx.redirect("/")
        # Here you can perform any additional actions after successful sign-in
    except Exception as e:
        print("Error:", e)
        # Handle sign-in error, e.g., display error message to the user
    return rx.text("Sign-in successful!") 

def register_form():
    return rx.vstack(
        rx.form(
            rx.vstack(
                rx.input(
                    placeholder="Name",
                    name="name",
                    # style={"margin-bottom" : "1em"},
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
                # rx.input(
                #     placeholder="Event Number",
                #     name="event_number",
                #     style={"margin-bottom" : "1em"},
                #     margin_bottom="1em",
                #     width = "100%"
                # ),
                rx.input(
                    placeholder="Enter PID",
                    name="pid_number",
                    type_="number",
                    style={"margin-bottom" : "1em"},
                    margin_bottom="1em",
                    width = "100%"
                ),
                rx.input(
                    placeholder="Enter your Phone Number",
                    name="ph_number",
                    type_="number",
                    style={"margin-bottom" : "1em"},
                    margin_bottom="1em",
                    width = "100%"
                ),
                rx.button("Register", type_="submit" , bg = "indigo" , color = "white",variant="outline" , margin_top = "5em" , style={"margin-top" : "3em"}),
            ),
            on_submit=RegisterFormData.handle_submit,
            reset_on_submit=True,
            style={ "padding" : "2em", "width" : "500px", "margin-top" : "3em"}
        ),
    )