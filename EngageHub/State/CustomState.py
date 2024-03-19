import reflex as rx


AUTH_TOKEN_LOCAL_STORAGE_KEY = "_auth_tokens"
class ClientStorageState(rx.State):
    login_status: str = rx.LocalStorage("")
class LocalStorageState(rx.State):
    # local storage with default settings
    l1: str = rx.LocalStorage()

    # local storage with custom settings
    l2: str = rx.LocalStorage("l2 default")
    l3: str = rx.LocalStorage(name="l3")
class UserCredentials(rx.State):
    username: str = rx.LocalStorage()
    password: str = rx.LocalStorage("password")

class UserState(rx.State):
    authenticated: bool = False
    role: str = "user"  # Default role is user
class GlobalState(rx.State):
    eventName: str = None
# Create an instance of the UserState
user_state = UserState()

# class 
class State(rx.State):
    """The app state."""

    # A dict from the chat name to the list of questions and answers.
    auth_token: str = rx.LocalStorage(name=AUTH_TOKEN_LOCAL_STORAGE_KEY)

    # The current chat name.
    current_event = "TantraUtsav"
    new_event : str
    event_Data =  {'description': 'Sutar', 'date': '2024-03-16', 'header': 'Vaibhav', 'time': '10:48', 'url': 'https://cdn.pixabay.com/photo/2017/12/08/11/53/event-party-3005668_640.jpg', 'link': '/eventdetails', 'redirect': '/register', 'venue': 'Dmart', 'location': 'Kandivali'}
    # The name of the new chat.
    @rx.var
    def getEvent(self) -> str:
        """A computed var that returns the current event."""
        # Computed vars update automatically when the state changes.
        return self.current_event