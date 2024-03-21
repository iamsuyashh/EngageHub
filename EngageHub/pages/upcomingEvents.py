import reflex as rx
from ..components import sidebar
from ..components import event_form
from ..State.firebaseConfig import createUpcomingEvent

class UpcomingEventData(rx.State):
    form_data: dict = {}

    def handle_submit(self, form_data: dict):
        """Handle the form submit."""
        self.form_data = form_data
        handle_Form_Submit(form_data)  
         # Check if any field is empty
        # if not all(form_data.values()):
        #         # print("Please fill in all fields.")
        #         return rx.alert("Please fill in all fields.")
def handle_Form_Submit(form_data):
    header = form_data.get("header")  # Access form_data correctly
    date = form_data.get("date")
    description = form_data.get("description")
    location = form_data.get("location")
    venue = form_data.get("venue")
    redirect = form_data.get("redirect")
    link = form_data.get("link")
    time = form_data.get("time")
    url = form_data.get("url")

    
   
    try:
            status = createUpcomingEvent(header,date,description,location,venue,redirect,link,time,url)
            if status  == True:
                 rx.alert("success")
            # ClStorage.set_currentUser
            # currentUser("Vaibhav")
            # UserCredentials.add_var()
            # UserStorage.set_user_email("Vaibhav@gmail.com")
            return rx.redirect("/")
        # Here you can perform any additional actions after successful sign-in
    except Exception as e:
        print("Error:", e)
        # Handle sign-in error, e.g., display error message to the user
    return rx.text("Sign-in successful!")
def upcomingEvents():
    return rx.container(
        sidebar(),
       rx.vstack(
       rx.heading("Create ",rx.span(" Upcoming Events", color="Indigo"),style={"margin-top":"20px"}),
        rx.form(
            rx.vstack(
                rx.input(
                    placeholder="Enter your Event Title",
                    name="header",
                    type_="text",
                    style={"margin-bottom" : "1em"},
                    # margin_bottom="1em",
                    width = "100%"
                ),
                rx.input(
                    placeholder="Event Description",
                    name="description",
                    type_="text",
                    style={"margin-bottom" : "1em"},
                    margin_bottom="1em",
                    width = "100%"
                ),
                rx.input(
                    placeholder="Address",
                    name="location",
                    type_="text",
                    style={"margin-bottom" : "1em"},
                    margin_bottom="1em",
                    width = "100%"),
                rx.input(
                    placeholder="Venue",
                    name="venue",
                    type_="text",
                    style={"margin-bottom" : "1em"},
                    margin_bottom="1em",
                    width = "100%"),
                rx.input(
                    placeholder="Date",
                    name="date",
                    type_="date",
                    style={"margin-bottom" : "1em"},
                    margin_bottom="1em",
                    width = "100%"
                ),
                rx.input(
                    placeholder="Time",
                    name="time",
                    type_='time',
                    style={"margin-bottom" : "1em"},
                    margin_bottom="1em",
                    width = "100%"
                ),
                rx.input(
                    placeholder="Image link",
                    name="url",
                    type_="text",
                    style={"margin-bottom" : "1em"},
                    margin_bottom="1em",
                    width = "100%"
                ),
                 rx.input(
                    placeholder="Redirect URl",
                    name="redirect",
                    type_="text",
                    style={"margin-bottom" : "1em"},
                    margin_bottom="1em",
                    width = "100%"),
                    rx.input(
                    placeholder="Link",
                    name="link",
                    type_="text",
                    style={"margin-bottom" : "1em"},
                    margin_bottom="1em",
                    width = "100%"),
                rx.button("Submit", type_="submit" , bg = "indigo" , color = "white",variant="outline" , margin_top = "5em" , style={"margin-top" : "3em"}),
            ),
            on_submit=UpcomingEventData.handle_submit,
            reset_on_submit=True,
            style={ "padding" : "2em", "width" : "500px", "margin-top" : "3em"}
        ),
   ),
        style={"max-width": "100vw"} 
    )