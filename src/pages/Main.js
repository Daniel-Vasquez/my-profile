import React from "react";
import { Link } from "react-router-dom";
import CardProjectPost from "../components/CardProjectPost";
import LittleCardProjectPost from "../components/LittleCardProjectPost";
import Contacts from "../components/Contacts";
import logoGithub from "../images/github.png";
import logoWhats from "../images/whatsapp.png";
import logoEmail from "../images/logoCorreo.png";

// import logoWhats from "../images/whatsapp-white.png";
// import logoGithub from "../images/github-white.png";
// import logoEmail from "../images/logoCorreo-white.png";

// import ArrowDown from "../images/flechaDown-white.png";
import ArrowDown from "../images/flechaDown.png";

import personalImage from "../images/danielPerfil.png";

import "../components/styles/Main.css";

class Main extends React.Component {
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
        <section className="mainContainer">
          <div className="main-container grid-container">
            <div className="main-container">
              <div className="main-container__img">
                <img src={personalImage} alt="Personal img" />
              </div>
              <div className="main-container__description">
                <p className="ParagranphsImpact">Hola, soy <span>Daniel Vásquez</span>.</p>
                <p className="main-container__paragraphs">
                  Soy <span>desarrollador frontend Developer</span>, con más de
                  un año de estudio autónomo y práctica constante, con pasión
                  por el diseño web y con nunca parar de aprender.
                </p>
                {/* <p className="ParagranphsImpact">
                con más de un año de estudio autónomo y
                práctica constante, con pasión por el diseño web y con nunca
                parar de aprender.
              </p>

              <p className="main-container__paragraphs">
                Me encanta aprender nuevas cosas, soy una persona sumamente
                obstinada y perseverante, pero sé en qué momento pedir ayuda.
              </p>
              <p className="main-container__paragraphs">
                Me fascina el diseño web. A continuación te presento algunos de
                los proyectos en que he trabajado, los cuales reflejan el gusto
                por el CSS y la implementación de React JS, librería de
                javaScript.
              </p> */}
                <a
                  className="main-container__mail"
                  href="mailto:dani.vasquez.dev@gmail.com"
                  target="_black"
                >
                  <strong>¿Trabajamos juntos?</strong>
                  <img
                    className="main-mail__logo"
                    src={logoEmail}
                    alt="Correo de contacto"
                  />
                </a>
                <div className="containerLinks">
                  <Link
                    className="mainContainer-whats__link"
                    to={{
                      pathname:
                        "https://api.whatsapp.com/send?phone=525531483433",
                    }}
                    target="_black"
                  >
                    whatsApp
                    <img
                      className="mainContainer-whats__img"
                      src={logoWhats}
                      alt="Contacto"
                    />
                  </Link>
                  <Link
                    className="mainContainer-git__link"
                    to={{ pathname: "https://github.com/Daniel-Vasquez" }}
                    target="_black"
                  >
                    Github
                    <img
                      className="mainContainer-git__img"
                      src={logoGithub}
                      alt="Contacto"
                    />
                  </Link>
                </div>
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

        <section className="mainPosts-container">
          <div className="grid-container">
            <h3 className="mainPosts-container__title">
              Proyectos
              <div className="container-line"></div>
            </h3>
            <div className="mainPosts-container__card">
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
            <p>
              El mayor reto que tuve al replicar instagram fue respecto al
              diseño; siendo una página elegante, por lo tanto fue difícil
              hacerlo "responsive".
            </p>
            <p>Se ajusta a todo tipo de pantalla, sea Desktop o mobile.</p>
            <p>El sitio web está hecho con React JS y cuenta con:</p>
            <ul>
              <li>Manejo de estado.</li>
              <li>User Interface.</li>
              <li>Manejo de single page apps.</li>
              <li>Llamada a APIs externas.</li>
              <li>Manejo de rutas (Route).</li>
              <li>Manejo de Portal y Modal.</li>
              <li>Implementación de componentes Stateful y Stateless.</li>
            </ul>
          </CardProjectPost>
        </div>
        <Contacts />
      </React.Fragment>
    );
  }
}

export default Main;
