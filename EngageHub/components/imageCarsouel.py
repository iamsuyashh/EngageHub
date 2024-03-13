import reflex as rx

class CarouselState(rx.State):
    current_image_index: int = 0
    images: list[str] = [
        '../../assets/event.jpeg',
        '../../assets/event.jpeg',
        '../../assets/event.jpeg',
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
    return rx.box(
        rx.button("Previous", on_click=CarouselState.previous_image),
        rx.image(src=CarouselState.images, width="100%", height="100%"),
        rx.button("Next", on_click=CarouselState.next_image),
        align_items="center",
        justify_content="space-between"
    )