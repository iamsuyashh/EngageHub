import reflex as rx
from reflex.components import table_container
from ..State.firebaseConfig import read_events,auth

def send_password_reset(email):
    try:
        auth.send_password_reset_email(email)
        print(f"Password reset email sent to {email}")
    except Exception as e:
        print("Error sending password reset email:", e)
class EventFormData(rx.State):
    form_data: dict = {}
def adminEvents():
    def handle_edit_event_click(header):
        print(f"Edit Event clicked for: {header}")

    users_data = read_events() or []
    print('Users Data: ',users_data)
    table_rows = [
        rx.chakra.tr(
            rx.chakra.td(user.get("header", "")),
            rx.chakra.td(user.get("venue", "")),
            rx.chakra.td(user.get("date", "")),
            rx.chakra.td(rx.button("Submit")),
            rx.td(rx.form(
            rx.vstack(
                rx.input(
                    placeholder="Enter your Event Title",
                    # value=,
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
            # on_submit=CreateEventData.handle_submit,
            reset_on_submit=False,
            style={ "padding" : "2em", "width" : "500px", "margin-top" : "3em"}
        ),),
        )
        for user in users_data
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
                style={"margin": "5rem auto", "padding": "1rem", "text-align": "center"}
            ),
            style={"margin": "auto", "text-align": "center", "margin-top": "50vh", "margin-left": "6vh", "transform": "translateY(-50%)", "max-width": "90%", "margin": "2rem auto"}
        )
    )
