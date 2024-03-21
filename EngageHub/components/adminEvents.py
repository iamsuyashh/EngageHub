import reflex as rx
from reflex.components import table_container
from ..State.firebaseConfig import read_events,auth

def send_password_reset(email):
    try:
        auth.send_password_reset_email(email)
        print(f"Password reset email sent to {email}")
    except Exception as e:
        print("Error sending password reset email:", e)

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
            rx.chakra.td(
                rx.chakra.form(
                    rx.chakra.input(placeholder="Header", value=user.get("header", "")),
                    rx.chakra.input(placeholder="Venue", value=user.get("venue", "")),
                    rx.chakra.input(placeholder="Date", value=user.get("date", "")),
                    rx.chakra.button("Submit",),
                    style={"display": "flex", "flexDirection": "column", "gap": "1rem"}
                )
            ),
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
