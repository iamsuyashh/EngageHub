from httpx import request
import reflex as rx
from fastapi import FastAPI, Request

app = FastAPI()
from ..components import event_details,navbar,footer
from ..State.firebaseConfig import read_event_info
import os
import urllib.parse
event_data = {
    "header": "Event Name",
    "location": "Location",
    "link": "register",
    "description": "EngageHub organized a 3D Modeling Workshop using Blender on 16th February at 5 PM. The workshop taught participants the magic of creating stunning 3D models and animations using Blender. It was suitable for both beginners and experienced users. The event was followed by a blender-render competition, which added to the excitement.",
    "time": "5 PM",
    "date": "February 16, 2023",
    "venue": "Mir road",
    "image_url": "https://i.ibb.co/SBgYbZt/audience-1853662-640.jpg",
}
# event_data = read_event_info("Event1")
async def main(rand_int: int, request: Request):
    domain = request.base_url
    path = request.url.path
    query_params = request.query_params

    return {"domain": domain, "path": path, "query_params": query_params}
event = read_event_info("Event1")
print(event)
class RouterStat(rx.State):
    pass
path: str = RouterStat.router.headers.to_string()
print(path)
def eventinfo():
    return rx.container(
        navbar(),
        rx.text(RouterStat.router.page.full_raw_path),
        event_details(event),
        footer(),
        style={"max-width":"100vw"}
    )
    