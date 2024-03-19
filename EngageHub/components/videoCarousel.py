# import reflex as rx

# class CarouselState1(rx.State):
#     current_video_index: int = 0
#     videos: list[str] = [
#         'https://www.youtube.com/embed/eu1QGisT8jg?si=8YU8rzGD6P7Sno0-&amp;controls=0',
#         'https://www.youtube.com/embed/9bZkp7q19f0',
#     ]

#     def next_video(self):
#         self.current_video_index = (self.current_video_index + 1) % len(self.videos)

#     def previous_video(self):
#         self.current_video_index = (self.current_video_index - 1) % len(self.videos)
    

# def videoCarousel():
#     return rx.container(
#         rx.video(src=CarouselState1.videos[CarouselState1.current_video_index], width="100vw", height="30vw", style={"position": "relative"}),
#         rx.container(
#             rx.button("<--", on_click=CarouselState1.previous_video, style={"position": "absolute", "left": "10px", "top": "50%", "transform": "translateY(-50%)"}),
#             rx.button("-->", on_click=CarouselState1.next_video, style={"position": "absolute", "right": "10px", "top": "50%", "transform": "translateY(-50%)"}),
#             style={"position": "absolute", "top": "10", "left": "444", "width": "100vw", "height": "50vw" , "opacity" : "0.5"}
#         ),
#         style={"max-width": "100vw", "position": "relative", "overflow": "hidden", "margin-bottom": "10px"}
#     )

