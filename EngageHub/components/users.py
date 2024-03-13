import reflex as rx
from reflex.components import table

def users_info():
    # return table(
    #     header=table.header(
    #         table.row(
    #             table.column_header_cell("Full name"),
    #             table.column_header_cell("Email"),
    #             table.column_header_cell("Group"),
    #         ),
    #     ),
    #     body=[
    #         table.row(
    #             table.row_header_cell("Danilo Sousa"),
    #             table.cell("danilo@example.com"),
    #             table.cell("Developer"),
    #         ),
    #         table.row(
    #             table.row_header_cell("Zahra Ambessa"),
    #             table.cell("zahra@example.com"),
    #             table.cell("Admin"),
    #         ),
    #         table.row(
    #             table.row_header_cell("Jasper Eriksson"),
    #             table.cell("jasper@example.com"),
    #             table.cell("Developer"),
    #         ),
    #     ],
    # )
    return rx.container()