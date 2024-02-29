"""The home page. This file includes examples abstracting complex UI into smaller components."""
import reflex as rx
from ..components import navbar, footer , featuredVideo , upcomingEvents
from ..State.CustomState import UserCredentials , user_state
from ..State.firebaseConfig import auth, firebase, read_event_details
# Create an instance of the ClientStorageState cl
cred = UserCredentials()
user = auth.current_user()
print(user)
print("UserState: ",user_state.authenticated)
rx.script("console.log('inline javascript')")
event_details = read_event_details() 
# Now you can use the current_user variable in your code
def home():
    """The home Page ."""
    return rx.container( 
       navbar(),
      #  gallery_cards(),
      #Featured Video
      featuredVideo(),
      #Upcoming Events
       upcomingEvents(event_details),
       rx.spacer(),
       footer(),
       style={"max-width": "100vw", "background-color":"#F8F8FA"}
    )