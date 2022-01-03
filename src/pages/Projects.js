import React from "react";
import { Link } from "react-router-dom";
import CardProjectPost from "../components/CardProjectPost";
import LittleCardProjectPost from "../components/LittleCardProjectPost";
import Contacts from "../components/Contacts";
import logoWhats from "../images/whatsapp.png";
import logoGithub from "../images/github.png";
import ArrowDown from "../images/flechaDown.png";
import logoEmail from "../images/logoCorreo.png";
import "../components/styles/Projects.css";

class Projects extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  handleDown = (evt, id) => {
    evt.preventDefault();
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  render() {
    return (
      <React.Fragment>
        <section className="ProjectsContainer">
          <div className="Projects-container grid-container">
            <div className="Projects-container__description">
              <p className="ParagranphsImpact">
                Soy Daniel Vásquez, con más de un año de estudio autónomo y
                práctica constante, con pasión por el diseño web y con nunca
                parar de aprender.
              </p>

              <p className="Projects-container__paragraphs">
                Me encanta aprender nuevas cosas, soy una persona sumamente
                obstinada y perseverante, pero sé en qué momento pedir ayuda.
              </p>
              <p className="Projects-container__paragraphs">
                Me fascina el diseño web. A continuación te presento algunos de
                los proyectos en que he trabajado, los cuales reflejan el gusto
                por el CSS y la implementación de React JS, librería de
                javaScript.
              </p>
              <a
                className="Projects-container__mail"
                href="mailto:dani.vasquez.dev@gmail.com"
                target="_black"
              >
                <strong>¿Trabajamos juntos?</strong>
                <img
                  className="Projects-mail__logo"
                  src={logoEmail}
                  alt="Correo de contacto"
                />
              </a>
              <div className="containerLinks">
                <Link
                  className="ProjectsContainer-whats__link"
                  to={{
                    pathname:
                      "https://api.whatsapp.com/send?phone=525531483433",
                  }}
                  target="_black"
                >
                  whatsApp
                  <img
                    className="ProjectsContainer-whats__img"
                    src={logoWhats}
                    alt="Contacto"
                  />
                </Link>
                <Link
                  className="ProjectsContainer-git__link"
                  to={{ pathname: "https://github.com/Daniel-Vasquez" }}
                  target="_black"
                >
                  Github
                  <img
                    className="ProjectsContainer-git__img"
                    src={logoGithub}
                    alt="Contacto"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="projectLink-container">
            <a
              className="projectDestacado-link"
              href="#destacado"
              onClick={(event) => {
                this.handleDown(event, "destacado");
              }}
            >
              Proyecto realizado desde cero
              <img
                className="projectDestacado-link__img"
                src={ArrowDown}
                alt="Icono de flecha"
              />
            </a>
          </div>
        </section>

        <section className="projects-posts-container">
          <div className="grid-container">
            <h3 className="projects-posts-container__title">
              Proyectos destacados
              <div className="container-line"></div>
            </h3>
            <div className="projects-posts-container__card">
              <LittleCardProjectPost />
            </div>
          </div>
        </section>

        <div className="containerDestacado" id="destacado">
          <h2 className="containerDestacado-title">
            Instagram creado desde cero
          </h2>
          <CardProjectPost
            title="Instagram"
            img="instagramImg.png"
            link="https://instagram-dani.vercel.app/"
            codigo="https://github.com/Daniel-Vasquez/instagram"
          >
            El mayor reto que tuve al replicar instagram fue respecto al diseño;
            siendo una página elegante, por lo tanto fue difícil hacerlo
            "responsive".
            <br />
            <br />
            Se ajusta a todo tipo de pantalla, sea Desktop o mobile.
            <br />
            <br />
            El sitio web está hecho con React JS y cuenta con:
            <br />
            <br />
            - Manejo de estado.
            <br />
            - User Interface.
            <br />
            - Manejo de single page apps.
            <br />
            - Llamada a APIs externas.
            <br />
            - Manejo de rutas (Route).
            <br />
            - Manejo de Portal y Modal.
            <br />
            - Implementación de componentes Stateful y Stateless.
          </CardProjectPost>
        </div>
        <Contacts />
      </React.Fragment>
    );
  }
}

export default Projects;
