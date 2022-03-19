import React from "react";
import { Link } from "react-router-dom";

import logoGithub from "../images/logo-github.png";
import logoWhats from "../images/logo-whatsapp.png";
import logoEmail from "../images/logo-correo.png";

import personalImage from "../images/danielPerfil.png";
import LittleCardProjectPost from "../components/LittleCardProjectPost.jsx";
import "../components/styles/Main.css";

function Main() {
  return (
    <>
      <section className="mainContainer">
        <div className="generalContainer">
          <div className="main-container">
            <div className="main-container__description">
              <p className="ParagranphsImpact">
                Hola, soy <span>Daniel Vásquez</span>.
              </p>
              <p className="main-container__paragraphs">
                Soy <span>desarrollador frontend Developer</span>, con más de un
                año de estudio autónomo y práctica constante, con pasión por el
                diseño web y con nunca parar de aprender.
              </p>
              <Link
                className="main-container__mail"
                to={{
                  pathname: "mailto:dani.vasquez.dev@gmail.com",
                }}
                target="_black"
              >
                <strong>¿Trabajamos juntos?</strong>
                <img
                  className="main-mail__logo"
                  src={logoEmail}
                  alt="Correo de contacto"
                />
              </Link>
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

            <div className="main-container__img">
              <Link
                to={{
                  pathname:
                    "https://www.linkedin.com/in/daniel-vasquez-nepomuceno/",
                }}
                target='_blank'
                title="Linkedin"
              >
                <img
                  className="main-containerImg"
                  src={personalImage}
                  alt="Personal img"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="projectsContainer" id="proyectos">
        <div className="generalContainer">
          <h1 className="projectsContainer-title">Proyectos</h1>
          <LittleCardProjectPost />
        </div>
      </section>

      <div className="instagramContainer">
        <div className="generalContainer">
          <h2 className="instagramContainer-title">
            Replica de Instagram, proyecto creado desde cero.
          </h2>

          <div className="instagram-container">
            <Link
              to={{ pathname: "https://instagram-dani.vercel.app/" }}
              target="_black"
              title="Visitar sitio"
            >
              <img
                className="instagramContainer-img"
                src="instagramImg.png"
                alt="Instagram"
              />
            </Link>
            <div className="instagramContainer-description">
              <h1 className="instagram-container__title">Instagram</h1>
              <p className="instagramContainer-description__paragraph">
                Mi proyecto está hecho con{" "}
                <span className="instagramContainer-description__span">
                  React JS
                </span>{" "}
                y cuenta con:
              </p>
              <ul className="instagramContainer-ul">
                <li>Manejo de estado.</li>
                <li>User Interface.</li>
                <li>Manejo de single page apps.</li>
                <li>Llamada a APIs externas.</li>
                <li>Manejo de rutas (Route).</li>
                <li>Manejo de Portal y Modal.</li>
                <li>Implementación de componentes Stateful y Stateless.</li>
              </ul>
              <div className="projectsContainer-buttons">
                <Link
                  className="projectsContainer-buttons__visit"
                  to={{ pathname: "https://instagram-dani.vercel.app/" }}
                  target="_black"
                >
                  Visitar
                </Link>

                <Link
                  className="projectsContainer-buttons__code"
                  to={{
                    pathname: "https://github.com/Daniel-Vasquez/instagram",
                  }}
                  target="_black"
                >
                  Ver código
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
