import reflex as rx

event_list = [
     {"url": "https://i.ibb.co/SBgYbZt/audience-1853662-640.jpg", "header": "Event 1", "location": "Location 1", "link": "/"},
     {"url": "https://i.ibb.co/SBgYbZt/audience-1853662-640.jpg", "header": "Event 1", "location": "Location 1", "link": "/register"},
     {"url": "https://i.ibb.co/SBgYbZt/audience-1853662-640.jpg", "header": "Event 1", "location": "Location 1", "link": "/"},
     {"url": "https://i.ibb.co/SBgYbZt/audience-1853662-640.jpg", "header": "Event 1", "location": "Location 1", "link": "/register"},

]
def qa(event_data : dict) -> rx.Component:
    return rx.responsive_grid(
        rx.card(
            rx.hstack(
            rx.box(
                rx.image(src=event_data["url"]),
                rx.heading(event_data["header"]),
                rx.text(
                    event_data["location"]
                ),
                rx.link(
                rx.button(
                    "Submit",
                ),
                href=event_data["link"]
                )
            ),
         as_child=True,
        ),
        size="lg",
        spacing="2",
        ),
       
        spacing="2",
        # margin_y="1em",
    )


def gallery_cards() -> rx.Component:
    return rx.box(
        rx.responsive_grid(
        *[
            *[qa(event_data) for event_data in event_list],
        ],
        rows=[3],
        columns=[4],
        )
    )


