import reflex as rx
def featuredVideo() -> rx.Component:
    return rx.video(
    url="https://www.youtube.com/embed/9bZkp7q19f0?si=MyRuo-IT0SyvRpSF&amp;controls=0",
    width="100%",
    height="60vh",
    controls=False,
    )