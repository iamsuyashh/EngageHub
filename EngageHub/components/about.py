import reflex as rx

def about_page():
    """About page component."""
    return rx.box(
        rx.heading("About Engage Hub", style={"color": "indigo", "text-align": "center" , "margin-bottom":"15px"}),
        rx.text(
            "Welcome to Engage Hub - Your Ultimate Event Update and Information Hub for College and IT Departments! Engage Hub is a dedicated platform designed to streamline and enhance your college experience by providing up-to-date information on events, activities, and crucial information related to the Information Technology department."
        ),
        rx.heading("Our Mission", style={"color": "indigo", "text-align": "center","margin-bottom":"15px"}),
        rx.text(
            "At Engage Hub, our mission is to empower students, faculty, and staff with the latest and most relevant information to foster a connected and informed community. We believe that staying informed is the key to a successful and engaging college experience."
        ),
        rx.heading("Features", style={"color": "indigo", "text-align": "center" , "margin-bottom":"15px"}),
        rx.box(
            rx.text("Event Updates: Stay in the loop with real-time updates on upcoming events, workshops, seminars, and social gatherings within your college and IT department.", style={"margin-bottom": "0.5em"}),
            rx.text("Department Information: Access essential information about the Information Technology department, including faculty details, departmental announcements, and academic resources.", style={"margin-bottom": "0.5em"}),
            rx.text("Seamless Communication: Connect with fellow students, faculty, and department staff through our integrated communication features, facilitating collaboration and community building.", style={"margin-bottom": "0.5em"}),
            rx.text("Personalized Experience: Customize your preferences to receive notifications and updates tailored to your specific interests and academic needs.", style={"margin-bottom": "1em"}),
            style={"margin-bottom": "1em"}
        ),
        rx.heading("Why Choose Engage Hub?", style={"color": "indigo", "text-align": "center" , "margin-bottom":"15px"}),
        rx.box(
            rx.text("Efficiency: Save time and effort by having all event updates and departmental information in one central hub.", style={"margin-bottom": "0.5em"}),
            rx.text("Community Building: Foster a sense of community within your college and IT department through enhanced communication and collaboration.", style={"margin-bottom": "0.5em"}),
            rx.text("Empowerment: Empower yourself with the knowledge needed to make the most of your college experience and academic journey.", style={"margin-bottom": "1em"}),
            style={"margin-bottom": "1em"}
        ),
        rx.box(
            rx.button("Get Started Today!", href="/register", color="indigo", dark=True),
            style={"text-align": "center"}
        ),
        style={
            "max-width": "800px",
            "margin": "auto",
            "padding": "2em",
            "font-family": "Arial, sans-serif",
            "line-height": "1.6",
            "color": "black",
        }
    )
