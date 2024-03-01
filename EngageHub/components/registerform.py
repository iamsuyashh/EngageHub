import reflex as rx

def register_form():
    return rx.vstack(
        rx.form(
            rx.vstack(
                rx.input(
                    placeholder="Event Name",
                    name="event_name",
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
                    placeholder="Event Number",
                    name="event_number",
                    style={"margin-bottom" : "1em"},
                    margin_bottom="1em",
                    width = "100%"
                ),
                rx.input(
                    placeholder="Enter PID",
                    name="pid_number",
                    style={"margin-bottom" : "1em"},
                    margin_bottom="1em",
                    width = "100%"
                ),
                # rx.input(
                #     placeholder="Start date",
                #     name="start_date",
                #     type_="date",
                #     style={"margin-bottom" : "1em"},
                #     margin_bottom="1em",
                #     width = "100%"
                # ),
               
                # rx.input(
                #     placeholder="End time",
                #     name="end_time",
                #     style={"margin-bottom" : "1em"},
                #     margin_bottom="1em",
                #     width = "100%"
                # ),
                # rx.input(
                #     placeholder="End date",
                #     name="end_date",
                #     type_="date",
                #     style={"margin-bottom" : "1em"},
                #     margin_bottom="1em",
                #     width = "100%"
                # ),
                rx.input(
                    placeholder="Enter your Phone Number",
                    name="number",
                    type_="email",
                    style={"margin-bottom" : "1em"},
                    margin_bottom="1em",
                    width = "100%"
                ),
                rx.button("Register", type_="submit" , bg = "indigo" , color = "white",variant="outline" , margin_top = "5em" , style={"margin-top" : "3em"}),
            ),
            # on_submit=FormState.handle_submit,
            reset_on_submit=True,
            style={ "padding" : "2em", "width" : "500px", "margin-top" : "3em"}
        ),
    )