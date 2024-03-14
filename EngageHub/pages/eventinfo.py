from httpx import request
import reflex as rx
from ..components import event_details,navbar,footer
from ..State.firebaseConfig import read_event_info

class MyParam(rx.State):
    event_param: str = ""
    def on_load (self):
        # Assign the router parameter to the state variable on page load
        self.event_param = self.router.page.params.get('param', '')
        print("Event Param:",self.event_param)  
# c1 = MyParam()
@rx.page(route='/eventdetails/',on_load=MyParam.on_load)


def eventinfo(): 
        param =MyParam.event_param
        print("Param:", param)
        event_data = read_event_info("Event1")
        return rx.container(
            navbar(),
            event_details(event_data),
            footer(),
            style={"max-width":"100vw"}
        )