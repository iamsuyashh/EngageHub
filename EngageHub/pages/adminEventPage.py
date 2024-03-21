import reflex as rx
from ..components import sidebar
from ..components import adminEvents
from ..State.firebaseConfig  import read_featured_video, update_featured_video_link

def adminEventPage():
    return rx.container(
         sidebar(),
         adminEvents(),
        #  users_info(),  # Pass users_data to the usersinfo component
    )
