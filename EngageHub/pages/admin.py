import reflex as rx
from ..components import sidebar
from ..components import users_info
from ..State.firebaseConfig  import read_featured_video, update_featured_video_link,read_live_stream_link,update_live_stream_link,fetch_images,add_images

class LifeStreamController(rx.State):
     video = read_live_stream_link()
     link = video["link"]
     text: str=link
     def onSubmit(self):
          self.text = self.text
          update_live_stream_link(self.text)
          print("text:", self.text)
class TextfieldControlled(rx.State):
     video = read_featured_video()
     link = video["link"]
     text: str=link
     def onSubmit(self):
          self.text = self.text
          update_featured_video_link(self.text)
          print("text:", self.text)
def admin_page():
    fetch_img = fetch_images()

    return rx.container(
         sidebar(),
         users_info(),  # Pass users_data to the usersinfo component
     # This is the home page youtube link 
        rx.container(
        rx.chakra.heading("Enter the Youtube Link for Home Page!", style={"text-align": "center", "font-size": "2rem", "color": "indigo", "margin-bottom": "2rem" , "margin-top":"100px"}),
         rx.input(
             value=TextfieldControlled.text,
             on_change= TextfieldControlled.set_text,
             style={"margin-top" : "20px"}
         ),
         rx.button("submit", on_click=TextfieldControlled.onSubmit),
         rx.chakra.heading("Enter Live Stream Link", style={"text-align": "center", "font-size": "2rem", "color": "indigo", "margin-bottom": "2rem" , "margin-top":"100px"}),
         rx.input(
             value=LifeStreamController.text,
             on_change= LifeStreamController.set_text,
             style={"margin-top" : "20px"}
         ),
         rx.button("submit", on_click=LifeStreamController.onSubmit),

        style={"margin": "5rem auto", "padding": "1rem", "text-align": "center","width":"100vw","height":"100vh"},  # Pass users_data to the usersinfo component
    ),
     style={"margin": "5rem auto", "padding": "1rem", "text-align": "center","width":"100vw","height":"100vh"}
    )
