import reflex as rx

def about_page():
    """About page component."""
    return rx.container(
        rx.heading("About Engage Hub", level=1, style={"color": "indigo", "text-align": "center", "margin-bottom": "15px"}),
        rx.text(
            "Welcome to Engage Hub - Your Ultimate Event Update and Information Hub for College and IT Departments! Engage Hub is a dedicated platform designed to streamline and enhance your college experience by providing up-to-date information on events, activities, and crucial information related to the Information Technology department.",
            style={"margin-bottom": "20px", "text-align": "center"}
        ),
        rx.heading("Our Mission", level=2, style={"color": "indigo", "text-align": "center", "margin-bottom": "15px"}),
        rx.text(
            "At Engage Hub, our mission is to empower students, faculty, and staff with the latest and most relevant information to foster a connected and informed community. We believe that staying informed is the key to a successful and engaging college experience.",
            style={"margin-bottom": "20px", "text-align": "center"}
        ),
        rx.heading("Features", level=2, style={"color": "indigo", "text-align": "center", "margin-bottom": "15px"}),
        rx.container(
            *[
                rx.text("Event Updates: Stay in the loop with real-time updates on upcoming events, workshops, seminars, and social gatherings within your college and IT department."),
                rx.text("Department Information: Access essential information about the Information Technology department, including faculty details, departmental announcements, and academic resources."),
                rx.text("Seamless Communication: Connect with fellow students, faculty, and department staff through our integrated communication features, facilitating collaboration and community building."),
                rx.text("Personalized Experience: Customize your preferences to receive notifications and updates tailored to your specific interests and academic needs.")
            ],
            style={"margin-bottom": "20px", "text-align": "center", "margin-left": "108px"}
        ),
        rx.heading("Why Choose Engage Hub?", level=2, style={"color": "indigo", "text-align": "center", "margin-bottom": "15px"}),
        rx.container(
            *[
                rx.text("Efficiency: Save time and effort by having all event updates and departmental information in one central hub."),
                rx.text("Community Building: Foster a sense of community within your college and IT department through enhanced communication and collaboration."),
                rx.text("Empowerment: Empower yourself with the knowledge needed to make the most of your college experience and academic journey.")
            ],
            style={"margin-bottom": "20px", "text-align": "center", "margin-left": "108px"}
        ),
        rx.button("Get Started Today!", href="/register", color="indigo", dark=True, style={"margin": "0 auto", "display": "block", "width": "200px"}),
        style={
            "max-width": "800px",
            "margin": "auto",
            "padding": "2em",
            "font-family": "Arial, sans-serif",
            "line-height": "1.6",
            "color": "black",
        }
    )
