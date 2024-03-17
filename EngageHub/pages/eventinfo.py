import reflex as rx
import asyncio
from reflex import state
from ..components import event_details,navbar,footer
from ..State.firebaseConfig import read_event_info

event_Data = {}
class MyParam(rx.State):
    event_param: str = ""
    Data = {}
    async def on_load (self):
        self.eventName = self.router.page.params.get('param', '')
        self.event_Data = read_event_info()
        print("Event Param:",self.event_param)  
        print("Event_Data",self.event_Data)
    def getData(self):
        return self.event_Data
    pass

# class eventData():
#         def __init__(self) :
#              self.event_data = None
#              self.event_param = None
        
#         def getData(self):
#             async def setData():
#                   self.event_data = read_event_info("TantraUtsav")
#             setData()

rx.page()
@rx.page(route='/eventdetails/',on_load=MyParam.on_load)
def eventInfo(): 
                print(MyParam.event_param)
                event_data = read_event_info()
                return rx.container(
                    navbar(),
                    event_details(event_data),
                    footer(),
                    style={"max-width":"100vw"}
)  