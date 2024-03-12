import reflex as rx
def featuredVideo() -> rx.Component:
    return rx.video(
    url="https://www.youtube.com/embed/eu1QGisT8jg?si=8YU8rzGD6P7Sno0-&amp;controls=0",
    width="100%",
    height="60vh",
    controls=False,
    )
# <iframe width="560" height="315" src="https://www.youtube.com/embed/eu1QGisT8jg?si=8YU8rzGD6P7Sno0-&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>xp