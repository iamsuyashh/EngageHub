import reflex as rx

def form_example():
    return rx.vstack(
        rx.form(
            rx.vstack(
                rx.input(
                    placeholder="Event Title",
                    name="event_title",
                    style={"margin-bottom" : "1em"},
                    margin_bottom="1em",
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
                    placeholder="Event Venue",
                    name="event_venue",
                    style={"margin-bottom" : "1em"},
                    margin_bottom="1em",
                    width = "100%"
                ),
                rx.input(
                    placeholder="Start time",
                    name="start_time",
                    style={"margin-bottom" : "1em"},
                    margin_bottom="1em",
                    width = "100%"
                ),
                rx.input(
                    placeholder="Start date",
                    name="start_date",
                    type_="date",
                    style={"margin-bottom" : "1em"},
                    margin_bottom="1em",
                    width = "100%"
                ),
                rx.button("Create Event", type_="submit" , bg = "indigo" , color = "white",variant="outline" , margin_top = "5em" , style={"margin-top" : "3em"}),
                rx.input(
                    placeholder="End time",
                    name="end_time",
                    style={"margin-bottom" : "1em"},
                    margin_bottom="1em",
                    width = "100%"
                ),
                rx.input(
                    placeholder="End date",
                    name="end_date",
                    type_="date",
                    style={"margin-bottom" : "1em"},
                    margin_bottom="1em",
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
            ),
            # on_submit=FormState.handle_submit,
            reset_on_submit=True,
            style={ "padding" : "2em", "width" : "500px", "margin-top" : "3em"}
        ),
    )