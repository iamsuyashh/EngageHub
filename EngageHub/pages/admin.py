import reflex as rx
from ..components import sidebar
from ..components import users_info

def admin_page():
    return rx.container(
         sidebar(),
         users_info(),  # Pass users_data to the usersinfo component
    )
