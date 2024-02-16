import reflex as rx
import json

# Step 1: Load data from JSON file
def load_data_from_json(json_file):
    with open(json_file, 'r') as file:
        data = json.load(file)
    return data

# Step 2: Define the main gallery component
def gallery_cards():
    # Update with the path to your JSON file
    json_file = "EngageHub\components\gallery.json"
    
    # Step 3: Load data from the JSON file
    data = load_data_from_json(json_file)

    # Step 4: Build the gallery container with fixed card data
    return rx.container(
        rx.grid(
            # Card 1
            rx.card(
                rx.text(data[0]["body"]),
                header=rx.heading(data[0]["header"], size="lg"),
                template_columns="repeat(1, 1fr)",
                h="em",
                width="80%",
                gap=1,
            ),
            # Card 2
            rx.card(
                rx.text(data[1]["body"]),
                header=rx.heading(data[1]["header"], size="lg"),
                template_columns="repeat(2, 1fr)",
                h="10em",
                width="80%",
                gap=2,
            ),
            # Card 3
            rx.card(
                rx.text(data[2]["body"]),
                header=rx.heading(data[2]["header"], size="lg"),
                template_columns="repeat(3, 1fr)",
                h="10em",
                width="80%",
                gap=3,
            ),
            template_columns="repeat(3, 1fr)",
            gap=1,
        ),
        style={"max-width": "100vw"}
    )