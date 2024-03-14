"""The home page. This file includes examples abstracting complex UI into smaller components."""
import reflex as rx
from ..components import navbar, footer , featuredVideo , upcomingEvents , carousel
from ..State.CustomState import UserCredentials , user_state
from ..State.firebaseConfig import auth, firebase, read_event_details
from ..components.form import ClStorage
# Create an instance of the ClientStorageState cl
cred = UserCredentials()
# user = auth.current_user() 
# print(user)
# print("CurrentUser from LocalStorage: ",OtherPageState.retrieve_user_email)


# class Home(rx.State):
class StateTwo(rx.State):
    same_shared_value: str = rx.LocalStorage(name="shared")
# username = same_shared_value
print("Shared Value",StateTwo.same_shared_value)
def display_username(self):
    # Access the username from LocalStorageState
    return rx.text(f"Hello, {self.ClStorage.currentUser}")

# Now you can use the current_user variable in your code
def home(): 
    event_details = read_event_details() 
    """The home Page ."""
    return rx.container( 
       navbar(),
       rx.code("Shared:",rx.LocalStorage(name="shared")),
      #  gallery_cards(),
      #Featured Video
      featuredVideo(),
    #   carousel(),
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