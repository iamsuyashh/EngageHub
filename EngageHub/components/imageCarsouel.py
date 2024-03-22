import reflex as rx
from ..State.firebaseConfig import add_images,fetch_images
class CarouselState(rx.State):
    current_image_index: int = 0
    images: list[str] = fetch_images()
    def next_image(self):
        if self.current_image_index < len(self.images) - 1:
            self.current_image_index += 1
        else:
            self.current_image_index = 0

    def previous_image(self):
        if self.current_image_index > 0:
            self.current_image_index -= 1
        else:
            self.current_image_index = len(self.images) - 1

def carousel():
    return rx.container(
        rx.image(
            src=CarouselState.images[CarouselState.current_image_index],
            width="100vw",
            height="35vw",
            style={"object-fit": "cover"}
        ),
        rx.container(
            rx.button("<--", on_click=CarouselState.previous_image, style={"position": "absolute", "left": "10px", "top": "50%", "transform": "translateY(-50%)"}),
            rx.button("-->", on_click=CarouselState.next_image, style={"position": "absolute", "right": "10px", "top": "50%", "transform": "translateY(-50%)"}),
            style={"position": "absolute", "top": "10", "left": "444", "width": "100vw", "height": "50vw" , "opacity" : "0.5","resizeMode":"cover"}
        ),
        style={"max-width": "100vw", "position": "relative", "overflow": "hidden", "margin-bottom": "10px"}
    )

   