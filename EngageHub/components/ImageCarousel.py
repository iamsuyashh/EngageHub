from reflex import ReflexComponent, State
from reflex.dom import Div, Img, Button
from reflex.carousel import Carousel

class ImageCarousel(ReflexComponent):
    def __init__(self, images):
        super().__init__()
        self.images = images
        self.current_index = State(0)

    def previous(self):
        self.current_index.update(lambda x: (x - 1) % len(self.images))

    def next(self):
        self.current_index.update(lambda x: (x + 1) % len(self.images))

    def render(self):
        return Div(
            Carousel(
                items=[self.render_image(index) for index, _ in enumerate(self.images)],
                current_index=self.current_index
            ),
            Button("Previous", onclick=self.previous, style={"margin-right": "10px"}),
            Button("Next", onclick=self.next)
        )

    def render_image(self, index):
        return Img(src=self.images[index], style={"max-width": "100%", "max-height": "300px"})
