import reflex as rx



def event_details(event_data) -> rx.Component:

    return rx.container(
        rx.image(src=event_data["url"], width="100%", height="30vw", style={"object-fit": "cover", "border-radius": "10px", "position": "relative"}),
        rx.link(
            rx.button("Register", style={"background-color": "Indigo", "color": "white", "dark":"true", "padding": "15px 30px", "border": "none", "border-radius": "8px", "position": "absolute", "top": "50%", "left": "50%", "transform": "translate(-50%, -50%)", "opacity": "0.8", "font-size": "1.5rem" }),
            href=event_data["link"],
            style={"textDecoration": "none"},
        ),
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
                style={"margin-top": "1rem"},
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