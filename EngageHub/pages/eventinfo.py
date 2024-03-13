from httpx import request
import reflex as rx
from fastapi import FastAPI, Request

app = FastAPI()
from ..components import event_details,navbar,footer
from ..State.firebaseConfig import read_event_info
import os
import urllib.parse

class MyParam(rx.State):
    event_param: str = ''
    def on_load (self):
        # Assign the router parameter to the state variable on page load
        print("Event Param object : ", self.event_param)
        self.event_param = self.router.page.params.get('param', '')
    @rx.var
    def get_param(self) -> str:
        print(self.router.page.params.get('param', ''))
        return self.router.page.params.get('param', '')
    def print_param(self):
        # Use rx.console_log to print the 'param' parameter to the browser's console
        return rx.console_log(self.get_param)
# c1 = MyParam()

def event_details_page():
    # Access the `event_param` from the `MyParam` state within the page function
    return MyParam.event_param
# event_data = read_event_info("Event1")

data = event_details_page()
print("Data: ", data)
class RouterStat(rx.State):
    pass
path: str = RouterStat.router.page.params
print("Path: ",path)
print("C1 Path: ",MyParam.event_param)

@rx.page(route='/eventdetails/',on_load=MyParam.on_load)
def eventinfo():
    event_info = MyParam.event_param  # Access the state variable
    event_details_data = read_event_info(event_info)
    print("Event Details: ", event_info)
    event_data1 = read_event_info("Event1")
    print('event_info',event_data1)
    event_data = read_event_info("Event1")
    return rx.container(
        navbar(),
        rx.text(f"The parameter is: {event_info}"),
        # event_details_page(),
        rx.text(RouterStat.router.page.raw_path),
        rx.text(RouterStat.router.page.raw_path),
        event_details(event_data),
        footer(),
        style={"max-width":"100vw"}
    )
    