"""The home page. This file includes examples abstracting complex UI into smaller components."""
import reflex as rx
from ..components import navbar, footer , featuredVideo , upcomingEvents
from ..State.CustomState import ClientStorageState
from ..State.firebaseConfig import auth, firebase, read_event_details
# Create an instance of the ClientStorageState cl
ClientStorageState.set_my_cookie = "Vaibhav"
print()

def get_data(self):
        # Fetch data
   data = read_event_details()
   print("data",data)
@rx.page(on_load=get_data)
# Now you can use the current_user variable in your code
def home():
    """The home page."""
    return rx.container( 
       navbar(),
      #  gallery_cards(),
      #Featured Video
      featuredVideo(),
      #Upcoming Events
       upcomingEvents(),
       rx.spacer(),
       footer(),
       style={"max-width": "100vw", "background-color":"#F8F8FA"}
    )