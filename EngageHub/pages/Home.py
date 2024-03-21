"""The home page. This file includes examples abstracting complex UI into smaller components."""
import reflex as rx
from ..components import navbar, footer , featuredVideo , upcomingEvents , carousel , blog_page
from ..State.firebaseConfig import auth, firebase, read_event_details, read_all_data, read_featured_video,read_upcoming_events
def display_username(self):
    # Access the username from LocalStorageState
    return rx.text(f"Hello, {self.ClStorage.currentUser}")
def on_load():
    event_details = read_upcoming_events() 
    return event_details
# Now you can use the current_user variable in your code

def home(): 
    event_details = read_upcoming_events()
    url = read_featured_video()
    link = url["link"]
    """The home Page ."""
    return rx.container( 
       navbar(),
    #    carousel(),
      #  gallery_cards(),
      #Featured Video
      featuredVideo(link),
    #   carousel(),
      #Upcoming Events
       upcomingEvents(event_details),
        blog_page(),
       rx.spacer(),
       footer(),
       style={"max-width": "100vw", "background-color":"#F8F8FA"},
        
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