import reflex as rx

def sidebar():
    return rx.container(
        rx.vstack(
            rx.heading("Engage HUB", margin_bottom="1em", color="indigo", font_weight="bold", font_size="1.5em"),
            rx.link("Home", href="/home", color="indigo", margin_bottom="0.5em"),
            rx.link("Services", href="/services", color="indigo", margin_bottom="0.5em"),
            rx.link("About Us", href="/about", color="indigo", margin_bottom="0.5em"),
            rx.link("Contact", href="/contact", color="indigo", margin_bottom="0.5em"),
            rx.button("Sign Up", color="indigo", background_color="white", border_color="indigo", margin_top="1em"),
            rx.button("Create Event", color="white", background_color="indigo", margin_top="0.5em"),
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
