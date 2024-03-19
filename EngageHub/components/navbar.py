import reflex as rx

# from webui import styles
# from webui.state import State
from ..State.auth_state import AuthState,AUTH_TOKEN_LOCAL_STORAGE_KEY
from ..State.auth_session import AuthSession

def printLocal():
    userState = rx.LocalStorage(AUTH_TOKEN_LOCAL_STORAGE_KEY)
    print("User State: ",userState)
    return printLocal
def handleLogout():
    print("Logout")
@rx.page(on_load=printLocal)
def navbar():
    return rx.box(
        rx.hstack(
            rx.hstack(
                rx.breadcrumb(
                    rx.breadcrumb_item(
                        rx.breadcrumb_link(
                        rx.heading("EngageHub", size="xl", color="indigo",),
                       href="/"
                       )
                    ),
                    # rx.text(AuthState.is),
                ),
            ),
            rx.hstack(
                
                rx.link(
                    rx.button("Event Gallery",color_scheme="none", color="indigo",size="lg" ),
                    href="/eventgallery",
                    button=True,
                ),
                rx.link(
                    rx.button("About Us",color_scheme="none", color="indigo",size="lg"),
                    href="/about",
                    button=True,
                ),
            ),
            rx.hstack(
                # if ,
                rx.chakra.input(
                    value=AuthState.is_logged_in
                ),
                rx.cond(
                    AuthState.is_logged_in == "true",
                    rx.button("Log out"),
                    rx.button("Log In")
                ),
                rx.link(
                    rx.button("Admin", bg="indigo", color="white"),
                    href="/admin",
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
        # width="100"
    )