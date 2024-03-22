import reflex as rx
from reflex.components import table_container
from ..State.firebaseConfig import read_users,auth




class UserFormData(rx.State):
    email: str = ""

    # def handle_submit(email):
    #     """Handle the form submit."""
    #     send_password_reset(email)

    def update_event_data(self, new_data: dict):
        """Update the event data in the state."""
        self.email = new_data.get("email", self.email)
        self.send_password_reset(self.email)

    def send_password_reset(self,email):
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
            rx.chakra.td(rx.button("Reset Password", on_click=UserFormData.update_event_data(user))),
        )
        for user in users_data
    ]

    return rx.container(
        rx.chakra.heading("Registered Users", style={"text-align": "center", "font-size": "2rem", "color": "indigo", "margin-bottom": "2rem" , "margin-top":"100px"}),
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
            style={"margin": "auto", "text-align": "center", "max-width": "100vw", "margin": "2rem auto", "overflow-x": "auto" , "width": "50vw"}
        )
    )
