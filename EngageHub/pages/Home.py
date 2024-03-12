"""The home page. This file includes examples abstracting complex UI into smaller components."""
import reflex as rx
from ..components import navbar, footer , featuredVideo , upcomingEvents
from ..State.CustomState import UserCredentials , user_state
from ..State.firebaseConfig import auth, firebase, read_event_details
from ..components.form import ClStorage
# Create an instance of the ClientStorageState cl
cred = UserCredentials()
# user = auth.current_user() 
# print(user)
user_email_from_storage = ClStorage.currentUser
print("CurrentUser from LocalStorage: ",user_email_from_storage)
print("UserState: ",user_state.authenticated)
event_details = read_event_details() 
# Now you can use the current_user variable in your code
def home(): 
    """The home Page ."""
    return rx.container( 
       navbar(),
      #  gallery_cards(),
      #Featured Video
      featuredVideo(),
       rx.text(ClStorage.currentUser),
      #Upcoming Events
       upcomingEvents(event_details),
       rx.spacer(),
       footer(),
       style={"max-width": "100vw", "background-color":"#F8F8FA"}
    )                


'''
class State(rx.State):
    event_details: dict

    def read_event_details(self):
        # Logic to read event details goes here
        self.event_details = fetch_event_details()

@rx.page(on_load=State.read_event_details)
def home():
    """The home Page."""
    return rx.container(
        navbar(),
        # gallery_cards(),
        # Featured Video
        featuredVideo(),
        # Upcoming Events
        upcomingEvents(State.event_details),
        rx.spacer(),
        footer(),
        style={"max-width": "100vw", "background-color": "#F8F8FA"}
    )
'''