import reflex as rx
from ..components import navbar
from ..components.gallery import gallery_cards
from ..State.firebaseConfig import read_event_details
event_list = read_event_details()
def galleryPage():
    return rx.container(
        navbar(),
        rx.spacer(),
        rx.chakra.flex(
        rx.chakra.flex(
        rx.chakra.span("Engage Hub ", color="indigo", font_weight="bold", size=20,style = { 
         "font_size": "30px",
       
        }),
        rx.chakra.span(": Where Events Come to Life!", color="black", font_size= "30px",),
        style={
            "margin":"10",
            "justify-content":"center",
        }
        ),
        rx.image(src="https://i.ibb.co/SBgYbZt/audience-1853662-640.jpg",style={
            "width":"50vw",
            "heigth":"30vh",
            "align-content":"center",
            "justify-content":"center",
        }),
        style={
            "width":"100vw",
            "heigth":"60vh",
            "justify-content":"space-between",
             "align-content":"center",
            # "background-color":"blue",
            
        }
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
            "margin":"5",
        }
        ),
        rx.flex(
        gallery_cards(event_list),
        style={
        "width":"70vw",
        "height":"auto",
        "justify-content":"center",
        "align-content":"center",
        "margin-left":"20%"
        }
        ),
        style={"max-width": "100%","background-color":"#F8F8FA", "max-height":"100%", "width":"100%","height":"100%"} 
    )