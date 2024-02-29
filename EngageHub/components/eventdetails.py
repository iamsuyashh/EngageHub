import reflex as rx

event_data = {
    "header": "Event Name",
    "location": "Location",
    "link": "register",
    "description": "EngageHub organized a 3D Modeling Workshop using Blender on 16th February at 5 PM. The workshop taught participants the magic of creating stunning 3D models and animations using Blender. It was suitable for both beginners and experienced users. The event was followed by a blender-render competition, which added to the excitement.",
    "time": "5 PM",
    "date": "February 16, 2023",
    "venue": "Mira road",
    "image_url": "https://i.ibb.co/SBgYbZt/audience-1853662-640.jpg",
}

def create_event_detail() -> rx.Component:
    return rx.container(
        rx.image(src=event_data["image_url"], width="100%", height="30vw", style={"object-fit": "cover", "border-radius": "10px", "position": "relative"}),
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
                rx.text("Location: " + event_data["venue"], style={"font-weight": "bold", "color": "black"}),
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

def event_details() -> rx.Component:
    return rx.container(
        create_event_detail(),
        style={"max-width": "100vw"},
    )
