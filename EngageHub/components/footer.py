import reflex as rx

def footer():
    """Footer component."""
    return rx.box(
        rx.container(
            rx.chakra.text(
                "Connect with us on social media",
                color="white",
                size="sm",
                mb="2"
            ),
            rx.chakra.flex(
                rx.html("<a href='https://www.instagram.com/sfit_itsa/'><img src='https://img.icons8.com/color/48/instagram-new--v1.png' alt='Twitter' style='margin-right:8px'></a>"),
                rx.html("<a href='https://github.com/VaibhavSutar/EngageHub'><img src='https://img.icons8.com/color/48/github--v1.png' alt='Facebook' style='margin-right:8px'></a>"),
                rx.html("<a href='https://www.linkedin.com/school/sfit/?originalSubdomain=in'><img src='https://img.icons8.com/color/48/linkedin.png' style='margin-right:8px'></a>"),
                style={"margin-bottom": "1rem", "justify-content": "center", "color": "white"}
            ),
            rx.chakra.text(
                "For inquiries, contact us at info@engagehub.com",
                color="white",
                size="sm",
                mb="2"
            ),
            rx.chakra.text(
                "© 2024 EngageHub",
                color="white",
                size="sm"
            ),
            style={"padding": "1rem", "background-color": "indigo", "text-align": "center"}
        ),
        style={"background-color": "indigo", "text-align": "center", "padding": "0rem"}
    )