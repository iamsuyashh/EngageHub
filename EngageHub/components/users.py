import reflex as rx
from reflex.components import table_container
from ..State.firebaseConfig import read_users, auth

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
            rx.chakra.td(user.get("email", ""), style={"font-weight": "bold", "color": "black", "padding": "10px"}),
            rx.chakra.td(user.get("name", ""), style={"font-weight": "bold", "color": "black", "padding": "10px"}),
            rx.chakra.td(user.get("phoneNumber", ""), style={"font-weight": "bold", "color": "black", "padding": "10px"}),
            rx.chakra.td(rx.button("Reset Password", style={"background-color": "indigo", "color": "white", "font-weight": "bold", "width": "100%", "padding": "10px"})),
        )
        for user in users_data
    ]

    return rx.container(
        rx.chakra.heading("Registered Users", style={"text-align": "center", "font-size": "2rem", "color": "indigo", "margin-bottom": "2rem" , "margin-top":"100px"}),
        table_container(
            rx.chakra.table(
                rx.chakra.thead(
                    rx.chakra.tr(
                        rx.chakra.th("Email", style={"font-weight": "bold", "color": "indigo", "padding": "10px"}),
                        rx.chakra.th("Name", style={"font-weight": "bold", "color": "indigo", "padding": "10px"}),
                        rx.chakra.th("Phone Number", style={"font-weight": "bold", "color": "indigo", "padding": "10px"}),
                        rx.chakra.th("Actions", style={"font-weight": "bold", "color": "indigo", "padding": "10px"}),
                    )
                ),
                rx.chakra.tbody(*table_rows),
                style={"margin": "0 auto", "padding": "1rem", "text-align": "center", "font-size": "1.2rem", "width": "100%" , "margin-top" : "50px"}
            ),
            style={"margin": "auto", "text-align": "center", "max-width": "100vw", "margin": "2rem auto", "overflow-x": "auto" , "width": "50vw"}
        )
    )
