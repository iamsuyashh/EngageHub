import reflex as rx

class CarouselState(rx.State):
    current_image_index: int = 0
    images: list[str] = [
        'https://i.ibb.co/SBgYbZt/audience-1853662-640.jpg',
        'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        '../../assets/event.jpeg',
        # ... add more images as required
    ]

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

   