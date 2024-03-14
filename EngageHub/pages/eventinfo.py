from httpx import request
import reflex as rx
from ..components import event_details,navbar,footer
from ..State.firebaseConfig import read_event_info

event_Data = {'description': 'EngageHub organized a 3D Modeling Workshop using Blender on 16th February at 5 PM. The workshop taught participants the magic of creating stunning 3D models and animations using Blender. It was suitable for both beginners and experienced users. The event was followed by a blender-render competition, which added to the excitement.', 'date': 'February 16, 2023', 'header': 'TantraUtsav', 'url': 'https://i.ibb.co/SBgYbZt/audience-1853662-640.jpg', 'link': '/eventdetails', 'redirect': '/register', 'venue': 'Mira ', 'location': 'Bhayander', "time":"9 PM"}
class MyParam(rx.State):
    event_param: str = ""
    Data = {}
    def on_load (self):
        # Assign the router parameter to the state variable on page load
        self.event_param = self.router.page.params.get('param', '')
        data = read_event_info(self.event_param)
        event_Data.update(data)
        self.Data = read_event_info(self.event_param)
        print("Data",data)
        print("Event Param:",self.event_param)  
    print("Event_Data",event_Data)
# c1 = MyParam()
@rx.page(route='/eventdetails/',on_load=MyParam.on_load)


def eventinfo(): 
        param =MyParam.event_param
        print("Param:", param)
        print("Data Parma:", MyParam.Data)

        event_data = read_event_info("Event1")
        return rx.container(
            navbar(),
            event_details(event_Data),
            footer(),
            style={"max-width":"100vw"}
        )