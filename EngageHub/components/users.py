import reflex as rx
from reflex.components import table_container
from ..State.firebaseConfig import read_users,auth

def send_password_reset(email):
    try:
        auth.send_password_reset_email(email)
        print(f"Password reset email sent to {email}")
    except Exception as e:
        print("Error sending password reset email:", e)

def users_info():
    users_data = read_users() or []
    table_rows = [
        rx.chakra.tr(
            rx.chakra.td(user.get("email", "")),
            rx.chakra.td(user.get("name", "")),
            rx.chakra.td(user.get("phoneNumber", "")),
            rx.chakra.td(rx.button("Reset Password")),
        )
        for user in users_data
    ]

    return rx.container(
        table_container(
            rx.chakra.table(
                rx.chakra.thead(
                    rx.chakra.tr(
                        rx.chakra.th("Email"),
                        rx.chakra.th("Name"),
                        rx.chakra.th("Phone Number"),
                        rx.chakra.th("Actions"),
                    )
                ),
                rx.chakra.tbody(*table_rows),
                style={"margin": "5rem auto", "padding": "1rem", "text-align": "center"}
            ),
            style={"margin": "auto", "text-align": "center", "margin-top": "50vh", "margin-left": "6vh", "transform": "translateY(-50%)", "max-width": "90%", "margin": "2rem auto"}
        )
    )
