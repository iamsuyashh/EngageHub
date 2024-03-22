import reflex as rx

def sidebar():
    return rx.container(
        rx.vstack(
            rx.link("Engage HUB", href = "/" , margin_bottom="1em", color="indigo", font_weight="bold", font_size="1.5em"),
            rx.link("Home", href="/admin", color="indigo", margin_bottom="0.5em"),
            # rx.link("Users", href="/adminE/vents", color=x"indigo", margin_bottom="0.5em"),
            rx.link("Events", href="/adminEvents", color="indigo", margin_bottom="0.5em"),
            rx.link("Create Event", href="/event", color="indigo", margin_bottom="0.5em"),
            rx.link("Create upcoming Events", href="/upcomingEvents", color="indigo", margin_bottom="0.5em"),
            rx.button("SignOut", href="/", color="indigo", margin_bottom="0.5em"),

            # rx.button("Create Event",href="/event", color="white", background_color="indigo", margin_top="0.5em"),
            position="fixed",
            height="100%",
            left="0px",
            top="0px",
            z_index="5",
            padding_x="2em",
            padding_y="1em",
            background_color="rgba(255, 255, 255, 0.9)",  # White with slight transparency
            align_items="left",
            width="250px",
            border_radius="10px",
            box_shadow="0 0 10px rgba(0, 0, 0, 0.1)",  # Soft shadow
        ),
        border_radius="10px",  # Ensure the container and its content have rounded corners
        box_shadow="0 0 10px rgba(0, 0, 0, 0.1)",  # Soft shadow for the container
    )
