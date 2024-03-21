import reflex as rx
from ..components import sidebar
from ..components import users_info
from ..State.firebaseConfig  import read_featured_video, update_featured_video_link

class TextfieldControlled(rx.State):
     video = read_featured_video()
     link = video["link"]
     text: str=link
     def onSubmit(self):
          self.text = self.text
          update_featured_video_link(self.text)
          print("text:", self.text)
def admin_page():
    return rx.container(
         sidebar(),
         users_info(),  # Pass users_data to the usersinfo component

     # This is the home page youtube link 
         rx.input(
             value=TextfieldControlled.text,
             on_change= TextfieldControlled.set_text
         ),
         rx.button("submit", on_click=TextfieldControlled.onSubmit)
    )
