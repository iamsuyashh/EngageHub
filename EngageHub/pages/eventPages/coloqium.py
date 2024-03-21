import reflex as rx
from ...components import event_details,navbar,footer
from ...State.firebaseConfig import read_event_info , db
eventName = "Coloqium"
# rx.asyncawait handle_event_details()
event_data = read_event_info(eventName)
@rx.page()
def coloqium()-> rx.Component: 
                    return rx.container(
                        navbar(),
                        event_details(event_data),
                        # rx.text(State.event_Data),
                        footer(),
                        style={"max-width":"100vw"}
)  
