import reflex as rx
from ..components import sidebar
from ..components import adminEvents
from ..State.firebaseConfig  import read_featured_video, update_featured_video_link

def adminEventPage():
    return rx.vstack(
         sidebar(),
         adminEvents(),
        #  users_info(),
        style={"margin": "5rem auto", "padding": "1rem", "text-align": "center","width":"100vw","height":"100vh"}  # Pass users_data to the usersinfo component
    )
