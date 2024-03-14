import reflex as rx
import urllib.parse
from reflex import route
from .form import ClStorage
from ..State.firebaseConfig import eventName
from .eventdetails import event_details
class RouterState(rx.State):
    pass
path = RouterState.router.page.raw_path
print(path),
print(route.get_route_args)
def qa(event_data : dict) -> rx.Component:
    query_string = urllib.parse.urlencode({"header": event_data["header"]})
    return rx.flex(
        rx.link(
        rx.card(
            # rx.hstack(
            rx.box(
                
                rx.image(src=event_data["url"]),
                rx.heading(event_data["header"]),
                rx.text(
                    event_data["location"],
                    rx.text(RouterState.router.page.raw_path),
                    rx.text(ClStorage.currentUser),
                ),
                # rx.link(
                # rx.button(
                #     "Submit",
                # ),
                # href=event_data["link"],
                # )
            ),
         as_child=True,
        # ),
        size="lg",
    # spacing="2",
        style={
            "height":"100%",
            "width":"100%",
              "drop-shadow":"1",
              "text-decoration": "none",
        }
        ),
       
        # spacing="2",
        margin_y="1em",
        margin_x="1em",
        href=f"{event_data['link']}?param={event_data['header']}",
        ),
    )

# event_details()
def eventCard(event_list) -> rx.Component:
    return rx.box(
        rx.responsive_grid(
        *[
            *[qa(event_data) for event_data in event_list],
        ],
        rows=[2],
        columns=[3],
        style={
            "height":"35vh",
            "width":"70vw",
        }
        ),
        # rx.button("Learn More"),
    )

