import reflex as rx
from ..components import navbar
from ..components.gallery import gallery_cards

def galleryPage():
    return rx.container(
        navbar(),
        rx.spacer(),
        rx.chakra.flex(
        rx.chakra.span("Engage Hub ", color="indigo", font_weight="bold", size=20,style = { 
         "font_size": "30px",
        }),
        rx.chakra.span(": Where Events Come to Life!", color="black", font_size= "30px",),
        rx.image(src="https://i.ibb.co/SBgYbZt/audience-1853662-640.jpg")
        ),
        style={"max-width": "100vw","background-color":"#F8F8FA", "max-height":"100vh"} 
    )