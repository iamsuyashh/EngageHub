"""The home page. This file includes examples abstracting complex UI into smaller components."""
import reflex as rx
from ..components import navbar, footer , gallery_cards
from ..State.CustomState import ClientStorageState
from ..State.firebaseConfig import auth, firebase, read_event_details
# Create an instance of the ClientStorageState cl
ClientStorageState.set_my_cookie = "Vaibhav"
print()
# Now you can use the current_user variable in your code
def home():
    """The home page."""
    read_event_details()
    return rx.container( 
       navbar(),
      #  gallery_cards(),
       footer(),
       style={"max-width": "100vw"}
    )