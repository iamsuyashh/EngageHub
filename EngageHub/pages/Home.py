"""The home page. This file includes examples abstracting complex UI into smaller components."""
import reflex as rx
from ..components import navbar, footer
from ..State.CustomState import ClientStorageState
from ..State.firebaseConfig import auth, firebase, read_event_details

# Create an instance of the ClientStorageState class
client_state = ClientStorageState()
# Access the currentUser attribute of the instance
current_user = client_state.currentUser

# Now you can use the current_user variable in your code
print("Current user:", current_user)
def home():
    """The home page."""
    read_event_details()
    return rx.container( 
       navbar(),
       footer(),
       style={"max-width": "100vw"}
    )