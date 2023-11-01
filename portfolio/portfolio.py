"""Welcome to Reflex! This file outlines the steps to create a basic app."""
from rxconfig import config

import reflex as rx

docs_url = "https://reflex.dev/docs/getting-started/introduction"
filename = f"{config.app_name}/{config.app_name}.py"


class State(rx.State):
    """The app state."""

    pass


def get_button(button_text: str, img_src: str, url_href: str):
    return rx.link(
        rx.hstack(
            rx.image(src=img_src, width="30px"),
            rx.text(
                button_text,
                font_size="20px",
                font_weight="500",
                font_family="DM Sans",
                text_align="center",
                width="calc(100% - 80px)",
                color="#57618A",
            ),
            padding="9ox 7px",
            width="95vw",
            max_width="700px",
            border="1px solid rgb(128,160,201)",
            border_radius="5px",
            bg="white",
            box_shadow="rgb(128,160,201) 8px 8px 0px 0px",
            _hover={
                "cursor": "pointer",
                "translate": "4px 4px",
                "box_shadow": "rgb(128,160,201) 8px 8px 0px 0px",
            },
        ),
        href=url_href,
        is_external=True,
        _hover={},
    )


def index() -> rx.Component:
    return rx.box(
        rx.center(
            rx.vstack(
                rx.vstack(
                    rx.image(
                        src="profile.png",
                        width="168",
                        height="168",
                        border_radius="50%",
                        margin_button="8px",
                    ),
                    rx.text(
                        "Andres Marquez",
                        font_weight="700",
                        font_size="36px",
                        line_height="1.5em",
                        font_family="DM Sans",
                        text_align="center",
                        width="100%",
                        color="rgb(255,255,255)",
                        padding_botton="3px",
                    ),
                    rx.text(
                        "Python & TypeScript Full-Stack Developer",
                        font_weight="500",
                        font_size="18px",
                        font_family="DM Sans",
                        text_align="center",
                        width="100%",
                        color="rgb(255,255,255)",
                        padding_botton="30px",
                    ),
                    spacing="0",
                ),
                rx.vstack(
                    get_button(
                        "Download my CV - Spanish",
                        "google-drive.png",
                        "https://www.google.com/",
                    ),
                    get_button(
                        "Download my CV - English",
                        "google-drive.png",
                        "https://www.google.com/",
                    ),
                    spacing="0.9em",
                ),
            ),
            padding_top="36px",
            width="100vw",
        ),
        bg="linear-gradient(160deg, rgb(109, 220, 225), rgb(83, 90, 229))",
        width="100vw",
        height="100vh",
    )


# Add state and page to the app.
app = rx.App(
    State=State,
    stylesheets=[
        "https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;500;600;700&display=swap"
    ],
)
app.add_page(index)
app.compile()
