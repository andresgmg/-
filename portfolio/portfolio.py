import reflex as rx


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
            padding="9px 7px",
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


def get_social_media_button(img_src: str, url_href: str, tooltip_text: str):
    return rx.tooltip(
        rx.link(
            rx.image(
                src=img_src,
                width="48px",
                _hover={
                    "cursor": "pointer",
                    "transform": "scale(1.1)",
                },
            ),
            href=url_href,
            is_external=True,
            _hover={},
        ),
        label=tooltip_text,
    )


@rx.page(
    title="Andres Marquez",
    description="My portfolio built with Reflex",
    image="/portfolio.png",
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
                        "Visit my Linkedin - Visita mi Linkedin",
                        "linkedin.png",
                        "https://www.linkedin.com/in/andresgmg/",
                    ),
                    get_button(
                        "Visit my Github - Visita mi Github",
                        "github.png",
                        "https://github.com/andresgmg/",
                    ),
                    get_button(
                        "Visit my Webpage & Portfolio - Visita mi pagina web y portafolio",
                        "portfolio.png",
                        "https://www.facelad.com/",
                    ),
                    get_button(
                        "Download my CV in Spanish - Descarga mi CV en Español",
                        "google-drive.png",
                        "https://drive.google.com/file/d/1TtFWpmas_-TVenOlimbaGqxwC11BCnry/view?usp=sharing",
                    ),
                    get_button(
                        "Download my CV in English - Descarga mi CV en Ingles",
                        "google-drive.png",
                        "https://drive.google.com/file/d/1HRv1SahcV94pUdS2buuAhcksZz9pJmni/view?usp=sharing",
                    ),
                    rx.hstack(
                        get_social_media_button(
                            "gmail.png",
                            "mailto:andres.gmg1997@gmail.com",
                            "My Email - Mi Correo",
                        ),
                        get_social_media_button(
                            "whatsapp.png",
                            "https://api.whatsapp.com/send/?phone=56991279911",
                            "My WhatsApp - Mi WhatsApp",
                        ),
                        get_social_media_button(
                            "instagram.png",
                            "https://www.instagram.com/andres.gmg/",
                            "My Instagram - Mi Instagram",
                        ),
                        get_social_media_button(
                            "telegram.png",
                            "https://t.me/CriptoAmerica",
                            "My Telegram - Mi telegram",
                        ),
                        spacing="1.5em",
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
