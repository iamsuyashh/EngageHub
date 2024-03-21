import reflex as rx

def about_page():
    """About page component."""
    return rx.container(
        rx.heading("About Us", level=1, style={"color": "indigo", "text-align": "center", "margin-bottom": "15px"}),
        rx.image(src="https://i.ibb.co/tbxGhMn/itsa-logo.png", alt="ITSA Logo", style={"display": "block", "margin": "0 auto", "max-width": "20vw", "height": "auto", "margin-bottom": "20px", "border-radius": "8px"}),
        rx.text("ITSA is a departmental organization for Information Technology. Founded in the year 2011-12, our committee organizes events to bridge the gap between classroom education and the technical skills required by students to be industry-ready.", style={"margin-bottom": "20px", "text-align": "center"}),
        rx.text("Our workshops foster students' exposure to leading domains in technology to offer a headstart. We focus on holistic growth, so our students become complete engineers.", style={"margin-bottom": "20px", "text-align": "center"}),
        rx.heading("Objectives of ITSA", level=2, style={"color": "indigo", "text-align": "center", "margin-bottom": "15px"}),
        rx.list(
            rx.list("Inspire, Enable, Empower, and Energize our student members to enhance their technical interests", style={"margin-bottom": "5px", "text-align": "center"}),
            rx.list("To bridge the gap between academic and industry through organizing regular Events/Seminars/Workshops", style={"margin-bottom": "5px", "text-align": "center"}),
            rx.list("To organize technical awareness programs for young professionals specifically targeted for placement activities", style={"margin-bottom": "5px", "text-align": "center"}),
            rx.list("To kindle students' interest in research activities and projects", style={"margin-bottom": "5px", "text-align": "center"})
        ),
        rx.heading("Vision", level=2, style={"color": "indigo", "text-align": "center", "margin-bottom": "15px"}),
        rx.text("To be a chrysalis where bright youngsters are transformed into technological entrepreneurs and innovative leaders of tomorrow’s world, consistent with the Franciscan vision of integrity, peace, and love.", style={"margin-bottom": "20px", "text-align": "center"}),
        rx.heading("Mission", level=2, style={"color": "indigo", "text-align": "center", "margin-bottom": "15px"}),
        rx.text("To churn highly competent engineering graduates with a commitment to result-oriented work, a perennial zest for learning, a quest for excellence, an open mind, and the universal values of honesty, dignity, and mutual care.", style={"margin-bottom": "20px", "text-align": "center"}),
        rx.text("To continually improve and progress on the path of developing postgraduate scholars who will be competent in exploring, developing, and disseminating new knowledge in their areas of specialization so that the repository of new knowledge and innovation and its dissemination will be enhanced in scope and effectiveness.", style={"margin-bottom": "20px", "text-align": "center"}),
        style={"max-width":"800px", "margin": "0 auto", "padding": "20px", "background-color": "#f8f9fa", "border-radius": "8px", "box-shadow": "0 0 10px rgba(0, 0, 0, 0.1)", "text-align": "center"}
    )

