import reflex as rx
from ..components import sidebar
from ..components import event_form

def upcomingEvents():
    return rx.container(
        sidebar(),
       rx.vstack(
       rx.heading("Create ",rx.span(" Event", color="Indigo"),style={"margin-top":"20px"}),
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
            # on_submit=CreateEventData.handle_submit,
            reset_on_submit=True,
            style={ "padding" : "2em", "width" : "500px", "margin-top" : "3em"}
        ),
   ),
        style={"max-width": "100vw"} 
    )