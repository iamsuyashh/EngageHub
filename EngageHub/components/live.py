import reflex as rx

def live():
   return rx.video(
    url="https://www.youtube.com/live/CY8m6Xrzsk0?feature=shared",
    width="100%",
    height="90vh",
    controls=False,
)
