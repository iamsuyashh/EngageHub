import reflex as rx

def footer():
    """Footer component."""
    return rx.box(
        rx.chakra.flex(
            rx.chakra.icon(name="fab fa-twitter", color="white", size="lg", mr="2", tag="add"),
            rx.chakra.icon(name="fab fa-facebook-f", color="white", size="lg", mr="2", tag="add"),
            rx.chakra.icon(name="fab fa-instagram", color="white", size="lg", mr="2", tag="add"),
            rx.chakra.icon(name="fab fa-linkedin-in", color="white", size="lg", mr="2", tag="add"),
            style={"margin-bottom": "1rem"}
        ),
        rx.chakra.text(
            "Connect with us on social media",
            color="white",
            size="sm",
            mb="2"
        ),
        rx.chakra.text(
            "For inquiries, contact us at info@engagehub.com",
            color="white",
            size="sm",
            mb="2"
        ),
        rx.chakra.text(
            "© 2024 EngageHub",
            color="white",
            size="sm"
        ),
        style={"background-color": "indigo", "text-align": "center", "padding": "1rem"}
    )
