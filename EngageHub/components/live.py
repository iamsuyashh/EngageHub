import reflex as rx
from ..State.firebaseConfig import read_live_stream_link
def live(url):
    return rx.video(
    url=url,
    width="100%",
    height="90vh",
    controls=False,
)