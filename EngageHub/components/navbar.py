import reflex as rx

# from webui import styles
# from webui.state import State


def navbar():
    return rx.box(
        rx.hstack(
            rx.hstack(
                rx.breadcrumb(
                    rx.breadcrumb_item(
                        rx.heading("EngageHub", size="xl", color="indigo",),
                    ),
                ),
            ),
            rx.hstack(
                rx.link(
                    rx.button("Event Gallery",color_scheme="none", color="indigo",size="lg" ),
                    href="https://reflex.dev",
                    button=True,
                ),
                rx.link(
                    rx.button("About Us",color_scheme="none", color="indigo",size="lg"),
                    href="https://reflex.dev",
                    button=True,
                ),
            ),
            rx.hstack(
                 rx.link(
                        "Login",
                        color="indigo",
                        mr="2",
                        href="/",
                ),
                rx.link(
                    rx.button("Example", bg="indigo", color="white"),
                    href="https://reflex.dev",
                    # color="rgb(107,99,246)",
                    button=True,
                ),
                spacing="8",
            ),
            justify="space-between",
        ),
        # bg=styles.bg_dark_color,
        backdrop_filter="auto",
        backdrop_blur="lg",
        p="4",
        # border_bottom=f"1px solid {styles.border_color}",
        position="sticky",
        top="0",
        z_index="100",
    )