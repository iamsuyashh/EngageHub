import reflex as rx

def gallery_cards():
    return rx.container(
        
        rx.grid(
            rx.card(
                rx.text("Body of the Card Component"),
                header=rx.heading("Header", size="lg"),
                template_columns="repeat(1, 1fr)",
                h="em",
                width="80%",
                gap=1,
            ),
            rx.card(
                rx.text("Body of the Card Component"),
                header=rx.heading("Header", size="lg"),
                template_columns="repeat(2, 1fr)",
                h="10em",
                width="80%",
                gap=2,
            ),
            rx.card(
                rx.text("Body of the Card Component"),
                header=rx.heading("Header", size="lg"),
                template_columns="repeat(3, 1fr)",
                h="10em",
                width="80%",
                gap=3,
            ),
            template_columns="repeat(3, 1fr)",
            gap=1,
        ),
        style={"max-width" : "100vw"}
    )
