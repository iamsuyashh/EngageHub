import reflex as rx

def qa(event_data : dict) -> rx.Component:
    return rx.flex(
        rx.link(
        rx.card(
            # rx.hstack(
            rx.box(
                rx.image(src=event_data["url"]),
                rx.heading(event_data["header"]),
                rx.text(
                    event_data["location"]
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
        href= event_data["link"]
        ),
    )


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

