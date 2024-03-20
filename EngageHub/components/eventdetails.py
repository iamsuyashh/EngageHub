import reflex as rx
# from ..State.firebaseConfig import r
class RegisterEventData(rx.State):
    form_data: dict = {}

    def handle_submit(self, form_data: dict):
        """Handle the form submit."""
        self.form_data = form_data
       
        print(form_data)
        rx.window_alert("Hello")
        handle_Form_Submit(form_data)
def handle_Form_Submit(form_data):
    from ..State.firebaseConfig import register_for_event
    name = form_data.get("name")  # Access form_data correctly
    email = form_data.get("email")
    pid = form_data.get("pid_number")
    ph_Number = form_data.get("ph_number")
    header = form_data.get("header")
    print("Name:",name)
    print("Email:",email)
    print("PID:",pid)
    print("Phone Number:",ph_Number)
    print("Header:",header)


    try:
            register = register_for_event(header,name,email,pid,ph_Number)
            if register:
                 return rx.chakra.alert(
                 rx.chakra.alert_icon(),
                    rx.chakra.alert_title(
                "Event Registered."
            ),
            status="success",
            ),
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
            
            # print("Username: ",credentials.username)
            # rx.script("")
            # userCred = auth.current_user()
            return rx.redirect("/")
        # Here you can perform any additional actions after successful sign-in
    except Exception as e:
        print("Error:", e)
        # Handle sign-in error, e.g., display error message to the user
    return rx.text("Sign-in successful!")        
def event_details(event_data) -> rx.Component:
    print("Event Details: ",event_data)
    if event_data is None:
        return rx.text("Loading...")
    
    return rx.container(
        rx.image(src=event_data["url"], width="100%", height="30vw", style={"object-fit": "cover", "border-radius": "10px", "position": "relative"}),
        # rx.link(
        #     rx.button("Register", style={"background-color": "Indigo", "color": "white", "dark":"true", "padding": "15px 30px", "border": "none", "border-radius": "8px", "position": "absolute", "top": "50%", "left": "50%", "transform": "translate(-50%, -50%)", "opacity": "0.8", "font-size": "1.5rem" }),
        #     href=event_data["redirect"],
        #     style={"textDecoration": "none"},
        # ),
        rx.container(
            rx.heading(event_data["header"], style={"color": "black", "font-size": "2rem", "margin-bottom": "0.5rem"}),
            rx.container(
                rx.text(event_data["description"], style={"margin-bottom": "0.2rem", "color": "black"}),
                style={"flex": "1", "margin-right": "2rem"},
            ),
            rx.container(
                rx.text("Date: " + event_data["date"], style={"font-weight": "bold", "color": "black"}),
                rx.text("Time: " + event_data["time"], style={"font-weight": "bold", "color": "black"}),
                rx.text("Location: " + event_data["venue"] + ", " + event_data["location"], style={"font-weight": "bold", "color": "black"}),  # Include location
                style={"margin-top": "0.5rem"},
            ),
            
            rx.vstack(
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
                rx.input(name="header", type_="hidden", value=event_data["header"]), 
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
            on_submit=RegisterEventData.handle_submit,
            reset_on_submit=True,
            style={ "padding" : "2em", "width" : "500px", "margin-top" : "3em"}
        ),
    ),
            style={"display": "flex", "flex-direction": "column", "align-items": "center", "gap": "1rem"},
            
        ),
        style={
            "max-width": "100vw",
            "padding": "2rem",
            "display": "flex",
            "flex-direction": "column",
            "align-items": "center",
            "gap": "1rem",
            "background-color": "#ffffff",
            "border": "1px solid #ddd",
            "border-radius": "10px",
            "box-shadow": "0 4px 8px rgba(0, 0, 0, 0.1)",
        },
    )
