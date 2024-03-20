import reflex as rx
from ..components import event_details,navbar,footer
from ..State.firebaseConfig import read_event_info , db
from ..State.CustomState import State
from fastapi import FastAPI, Query

app = FastAPI()

@app.get("/eventdetails")
async def handle_event_details(header: str = Query(None)):
    global eventName
    if header:
        print(f"Received header from query string: {header}")
        # Use the header value to personalize the event details
        event_data = read_event_info(header)  # Hypothetical function to fetch data
    else:
        print("No header found in query string.")
        event_data = read_event_info("default_event")  # Fallback for no header

    return {"event_data": event_data}

class MyParam(rx.State):
    current_event = "TantraUtsav"
    new_event : str
    event_param: str = ""
    async def on_load (self):
        self.eventName = self.router.page.params.get('param', '')
        # self.event_Data = read_event_info()
        print("Event Param:",self.event_param)  
        # print("Event_Data",self.event_Data)

    def getData(self):
        return self.event_Data
    @rx.var
    def getEvent(self) -> str:
        """A computed var that returns the current event."""
        # Computed vars update automatically when the state changes.
        return self.current_event
    
eventName = "Vaibhav"
# rx.asyncawait handle_event_details()
@rx.page()
@rx.page(route='/eventInfo/',on_load=MyParam.on_load)
def eventInfo()-> rx.Component: 
                    event_data = read_event_info(eventName)
                    return rx.container(
                        navbar(),
                        event_details(event_data),
                        # rx.text(State.event_Data),
                        footer(),
                        style={"max-width":"100vw"}
)  
'''
{'Event1': {'description': 'EngageHub organized a 3D Modeling Workshop using Blender on 16th February at 5 PM. The workshop taught participants the magic of creating stunning 3D models and animations using Blender. It was suitable for both beginners and experienced users. The event was followed by a blender-render competition, which added to the excitement.', 'date': 'February 16, 2023', 'time': '5 PM', 'header': 'TantraUtsav', 'url': 'https://i.ibb.co/SBgYbZt/audience-1853662-640.jpg', 'link': '/eventdetails', 'redirect': '/register', 'venue': 'Mira ', 'location': 'Bhayander', 'doc_id': 'Event1', 'subcollections': {}}}
'''