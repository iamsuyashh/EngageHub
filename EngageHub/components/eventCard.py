import reflex as rx
import urllib.parse
from reflex import route
from ..State.CustomState import GlobalState
from .eventdetails import event_details
class RouterState(rx.State):
    pass
path = RouterState.router.page.raw_path
print(path),
print(route.get_route_args)

class EventState(rx.State):
    eventName: str = ""
    # @rx.var
    def set_event_name(self):
        self.eventName = "Vaibhav"
    def get_event_name(self):
        return self.eventName

def qa(event_data : dict) -> rx.Component:
    def on_click_handler():
        print()
    # query_string = urllib.parse.urlencode({event_data["header"]})
    return rx.flex(
        rx.link(
        rx.card(
            # rx.hstack(
            rx.box(
                
                rx.image(src=event_data["url"]),
                rx.heading(event_data["header"]),
                rx.text(
                    event_data["location"],
                    # rx.text(RouterState.router.page.raw_path),
                    # rx.text(EventState.eventName),
                ),
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
        # on_click=EventState.set_event_name,
        href=event_data["link"]
        # href=f"{event_data["link"]}",
        # on_click=
        ),
    )

# event_details()
def eventCard(event_list) -> rx.Component:
    # event_list is None:
    if event_list is None:
        return rx.text("Loading...")
    
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

