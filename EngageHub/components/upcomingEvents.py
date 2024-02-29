import reflex as rx

from .eventCard import eventCard
from ..State.firebaseConfig import read_event_details
# event_list = [
#      {"url": "https://i.ibb.co/SBgYbZt/audience-1853662-640.jpg", "header": "TantraUtsav", "location": "Location 1", "link": "/"},
#      {"url": "https://i.ibb.co/SBgYbZt/audience-1853662-640.jpg", "header": "Event 1", "location": "Location 1", "link": "/register"},
#      {"url": "https://i.ibb.co/SBgYbZt/audience-1853662-640.jpg", "header": "Event 1", "location": "Location 1", "link": "/"},
#      {"url": "https://i.ibb.co/SBgYbZt/audience-1853662-640.jpg", "header": "Event 1", "location": "Location 1", "link": "/register"},
#      {"url": "https://i.ibb.co/SBgYbZt/audience-1853662-640.jpg", "header": "Event 1", "location": "Location 1", "link": "/register"},
#      {"url": "https://i.ibb.co/SBgYbZt/audience-1853662-640.jpg", "header": "Event 1", "location": "Location 1", "link": "/register"},
# ]\

# event_list =  read_event_details()

def upcomingEvents(event_list):
    return rx.vstack(
        rx.flex(
            rx.flex(

        rx.heading("Upcoming Events",align="left"),
        # rx.link(
        # rx.button('Learn More',bg="indigo", color="white",style={
        # }),
        # style={

        # "align":"center",
        # "justify":"center",
        # "margin-left":"30"
        # },
        # href="/gallery",p
        # ),
        ),
        eventCard(event_list),
        rx.spacer(),
        # rx.heading("Learn MOre"),
        direction="column"
        ),
        style={
            "margin":"10",
            "height":"100vh",
        }
    )