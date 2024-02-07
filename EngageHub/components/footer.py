import reflex as rx

def footer():
    """Footer component."""
    return rx.box(
        rx.text(
        "© 2024 EngageHub",
        color="white"
        ),
        style={"background-color": "indigo","text-align": "center"},
        p="10"
    )
