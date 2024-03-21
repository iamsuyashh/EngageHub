import reflex as rx
from reflex.components import table_container
from ..State.firebaseConfig import read_events,auth,updateEvent

def send_password_reset(email):
    try:
        auth.send_password_reset_email(email)
        print(f"Password reset email sent to {email}")
    except Exception as e:
        print("Error sending password reset email:", e)
class HideFormState(rx.State):
    show: bool = True

    def change(self):
        self.show = not (self.show)

class EventFormData1(rx.State):
    header: str = ""
    venue: str = ""
    date: str = ""
    description: str =""
    location:str =""
    redirect :str =""
    link: str =""
    time:str =""
    url:str =""
    form_data: dict = {}
    # Add other relevant state variables here
    
    def update_event_data(self, new_data: dict):
        """Update the event data in the state."""
        self.header = new_data.get("header", self.header)
        self.venue = new_data.get("venue", self.venue)
        self.date = new_data.get("date", self.date)
        self.description = new_data.get("description", self.description)
        self.location = new_data.get("location", self.location)
        self.redirect = new_data.get("redirect", self.redirect)
        self.link = new_data.get("link", self.link)
        self.time = new_data.get("time", self.time)
        self.url = new_data.get("url", self.url)

        self.form_data = {**self.form_data, **new_data}
        
    def handle_submit(self, form_data: dict):
        """Handle the form submit."""
        self.update_event_data(form_data)
        handle_Form_Submit(self.form_data)
         # Check if any field is empty
        # if not all(form_data.values()):
        #         # print("Please fill in all fields.")
        #         return rx.alert("Please fill in all fields.")
        # handle_Form_Submit(form_data)
def handle_Form_Submit(form_data):
    header = form_data.get("header")  # Access form_data correctly
    date = form_data.get("date")
    description = form_data.get("description")
    venue = form_data.get("venue")
    location = form_data.get("location")
    redirect = form_data.get("redirect")
    link = form_data.get("link")
    time = form_data.get("time")
    url = form_data.get("url")

    # updated_data = {
    #         "header": self.form_data.get("header", ""),
    #         "venue": self.form_data.get("venue", ""),
    #         "date": self.form_data.get("date", ""),
    #         # Add other fields here
    #     }
    try:
        status = updateEvent(header,date,description,location,venue,redirect,link,time,url)
        return rx.alert("success")
        # Here you can perform any additional actions after successful sign-in
    except Exception as e:
        print("Error:", e)
        # Handle sign-in error, e.g., display error message to the user
    return rx.text("Sign-in successful!")
def adminEvents():
    def handle_edit_event_click(header):
        print(f"Edit Event clicked for: {header}")

    users_data = read_events() or []
    print('Users Data: ',users_data)
        # header = user.get("header",""),
    table_rows = [
    rx.chakra.tr(
        rx.chakra.td(user.get("header", "")),
        rx.chakra.td(user.get("venue", "")),
        rx.chakra.td(user.get("date", "")),
        rx.chakra.td(rx.button("Edit Event", on_click=EventFormData1.update_event_data(user)))
    )
    for user in users_data
] + [
    rx.chakra.tr(
        rx.chakra.td(
            rx.form(
                rx.vstack(
                rx.input(
                    placeholder="Enter your Event Title",
                    value=EventFormData1.header,
                    name="header",
                    type_="text",
                    style={"margin-bottom" : "1em"},
                    is_read_only=True,
                    # margin_bottom="1em",
                    on_change=EventFormData1.set_header,
                    width = "100%"
                ),
                rx.input(
                    placeholder="Event Description",
                    value=EventFormData1.description,
                    on_change=EventFormData1.set_description,
                    name="description",
                    type_="text",
                    style={"margin-bottom" : "1em"},
                    margin_bottom="1em",
                    width = "100%"
                ),
                rx.input(
                    placeholder="Address",
                     value=EventFormData1.location,
                    on_change=EventFormData1.set_location,
                    name="location",
                    type_="text",
                    style={"margin-bottom" : "1em"},
                    margin_bottom="1em",
                    width = "100%"),
                rx.input(
                    placeholder="Venue",
                    value=EventFormData1.venue,
                    on_change=EventFormData1.set_venue,
                    name="venue",
                    type_="text",
                    style={"margin-bottom" : "1em"},
                    margin_bottom="1em",
                    width = "100%"),
                rx.input(
                    placeholder="Date",
                    value=EventFormData1.date,
                    on_change=EventFormData1.set_date,
                    name="date",
                    type_="date",
                    style={"margin-bottom" : "1em"},
                    margin_bottom="1em",
                    width = "100%"
                ),
                rx.input(
                    placeholder="Time",
                    value=EventFormData1.time,
                    on_change=EventFormData1.set_time,
                    name="time",
                    type_='time',
                    style={"margin-bottom" : "1em"},
                    margin_bottom="1em",
                    width = "100%"
                ),
                rx.input(
                    placeholder="Image link",
                    value=EventFormData1.url,
                    on_change=EventFormData1.set_url,
                    name="url",
                    type_="text",
                    style={"margin-bottom" : "1em"},
                    margin_bottom="1em",
                    width = "100%"
                ),
                 rx.input(
                    placeholder="Redirect URl",
                    value=EventFormData1.redirect,
                    on_change=EventFormData1.set_redirect,
                    name="redirect",
                    type_="text",
                    style={"margin-bottom" : "1em"},
                    margin_bottom="1em",
                    width = "100%"),
                    rx.input(
                    placeholder="Link",
                    value=EventFormData1.link,
                    on_change=EventFormData1.set_link,
                    name="link",
                    type_="text",
                    style={"margin-bottom" : "1em"},
                    margin_bottom="1em",
                    width = "100%"),
                rx.button("Edit Event", type_="submit" , bg = "indigo" , color = "white",variant="outline" , margin_top = "5em" , style={"margin-top" : "3em"}),

            ),
                 on_submit=EventFormData1.handle_submit,
                reset_on_submit=False,
                style={"padding": "2em", "width": "500px"}
            )
        ),
        colspan=4  # Merge all columns into one for the form
    )
]


    return rx.container(
    table_container(
        rx.chakra.table(
            rx.chakra.thead(
                rx.chakra.tr(
                    rx.chakra.th("Header"),
                    rx.chakra.th("Venue"),
                    rx.chakra.th("Date"),
                    rx.chakra.th("Actions"),
                )
            ),
            rx.chakra.tbody(*table_rows),
            style={
                "margin": "5rem auto",
                "padding": "1rem",
                "text-align": "center",
                "height": "500px",  # Adjust table height as needed
                "width": "80%",  # Adjust table width as needed
                "max-height": "600px",  # Optional, for max table height
                "min-height": "300px",  # Optional, for min table height
                "max-width": "90vw",  # Optional, for max table width
                "min-width": "300px",  # Optional, for min table width
            }
        ),
        style={
            "margin": "auto",
            "text-align": "center",
            "margin-top": "50vh",
            "margin-left": "6vh",
            "transform": "translateY(-50%)",
            # "background-color":"red",
            "width": "90vw",
            # "margin": "2rem auto"
        }
    ),
     style={
            # "background-color":"blue",
            "width": "100vw",
           
     }
)


'''

rx.vstack(
                rx.input(
                    placeholder="Enter your Event Title",
                    value=EventFormData1.header,
                    name="header",
                    type_="text",
                    style={"margin-bottom" : "1em"},
                    # margin_bottom="1em",
                    on_change=EventFormData1.set_header,
                    width = "100%"
                ),
                rx.input(
                    placeholder="Event Description",
                    value=EventFormData1.description,
                    on_change=EventFormData1.set_description,
                    name="description",
                    type_="text",
                    style={"margin-bottom" : "1em"},
                    margin_bottom="1em",
                    width = "100%"
                ),
                rx.input(
                    placeholder="Address",
                     value=EventFormData1.location,
                    on_change=EventFormData1.set_location,
                    name="location",
                    type_="text",
                    style={"margin-bottom" : "1em"},
                    margin_bottom="1em",
                    width = "100%"),
                rx.input(
                    placeholder="Venue",
                    value=EventFormData1.venue,
                    on_change=EventFormData1.set_venue,
                    name="venue",
                    type_="text",
                    style={"margin-bottom" : "1em"},
                    margin_bottom="1em",
                    width = "100%"),
                rx.input(
                    placeholder="Date",
                    value=EventFormData1.date,
                    on_change=EventFormData1.set_date,
                    name="date",
                    type_="date",
                    style={"margin-bottom" : "1em"},
                    margin_bottom="1em",
                    width = "100%"
                ),
                rx.input(
                    placeholder="Time",
                    value=EventFormData1.time,
                    on_change=EventFormData1.set_time,
                    name="time",
                    type_='time',
                    style={"margin-bottom" : "1em"},
                    margin_bottom="1em",
                    width = "100%"
                ),
                rx.input(
                    placeholder="Image link",
                    value=EventFormData1.url,
                    on_change=EventFormData1.set_url,
                    name="url",
                    type_="text",
                    style={"margin-bottom" : "1em"},
                    margin_bottom="1em",
                    width = "100%"
                ),
                 rx.input(
                    placeholder="Redirect URl",
                    value=EventFormData1.redirect,
                    on_change=EventFormData1.set_redirect,
                    name="redirect",
                    type_="text",
                    style={"margin-bottom" : "1em"},
                    margin_bottom="1em",
                    width = "100%"),
                    rx.input(
                    placeholder="Link",
                    value=EventFormData1.link,
                    on_change=EventFormData1.set_link,
                    name="link",
                    type_="text",
                    style={"margin-bottom" : "1em"},
                    margin_bottom="1em",
                    width = "100%"),
                rx.button("Submit", type_="submit" , bg = "indigo" , color = "white",variant="outline" , margin_top = "5em" , style={"margin-top" : "3em"}),

            ),

'''