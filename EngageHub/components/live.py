import reflex as rx

def live():
   return rx.video(
    url="https://www.youtube.com/embed/x7JMGS0u8Do?si=FNFXJyssfDks-ea4&amp;controls=0;autoplay;",
    width="100%",
    height="90vh",
    controls=False,
)
