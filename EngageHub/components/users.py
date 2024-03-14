import reflex as rx
from reflex.components import table_container

def users_info():
    # Define data using dictionaries
    users_data = [
        {"name": "John", "age": 30, "location": "New York"},
        {"name": "Jane", "age": 31, "location": "San Francisco"},
        {"name": "Joe", "age": 32, "location": "Los Angeles"},
    ]

    # Generate table rows dynamically using data
    table_rows = [
        rx.chakra.tr(
            rx.chakra.td(user["name"]),
            rx.chakra.td(user["age"]),
            rx.chakra.td(user["location"]),
        )
        for user in users_data
    ]

    # Construct the table
    return rx.container(
        table_container(
            rx.chakra.table(
                rx.chakra.thead(
                    rx.chakra.tr(
                        rx.chakra.th("Name"),
                        rx.chakra.th("Age"),
                        rx.chakra.th("Location"),
                    )
                ),
                rx.chakra.tbody(*table_rows),
                style={"margin": "2rem auto", "padding": "1rem", "text-align": "center"}
            ),
            style={ "margin": "auto", "text-align": "center" , "margin-top": "50vh",  "margin-left" : "6vh" ,  "transform": "translateY(-50%)","max-width": "90%", "margin": "2rem auto"}
        )
    )
