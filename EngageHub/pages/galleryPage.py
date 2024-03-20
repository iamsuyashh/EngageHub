import reflex as rx
from ..components import navbar
from ..components.gallery import gallery_cards
from ..components import carousel
from ..State.firebaseConfig import read_event_details
event_list = read_event_details()
def galleryPage():
    return rx.container(
        navbar(),
        rx.spacer(),
        rx.chakra.flex(
            rx.chakra.flex(
                rx.chakra.span("EngageHub ", color="indigo", font_weight="bold", size=20, style={"font_size": "30px"}),
                rx.container(": Where Events Come to Life!", color="black", font_size="30px"),
                style={"margin": "5"}
            ),
            carousel(),
            style={"display": "flex", "flex-direction": "column", "justify-content": "center", "align-items": "center", "margin-top": "10px"}
        ),
        rx.flex(
        rx.span("Event  ",color="indigo", font_weight="bold",style = { 
         "font_size": "25px",
         "margin-right":"10px",
        }),
        rx.span("Gallery",style = { 
         "font_size": "25px",
        }),
        style={
            
            "justify-content" : "center",
            "align-content":"center",
            "margin-top" : "10px"
        }
        ),
        rx.flex(
        gallery_cards(event_list),
        style={
        "width":"70vw",
        "height":"auto",
        "justify-content":"center",
        "align-content":"center",
        "margin-left":"15%"
        }
        ),
        style={"max-width": "100%", "max-height":"100%", "width":"100%","height":"100%"} 
    )