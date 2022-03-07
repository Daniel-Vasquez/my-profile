import React from "react";
import { Link } from "react-router-dom";
import CardProjectPost from "../components/CardProjectPost.jsx";
import Contacts from "../components/Contacts.jsx";
import logoGithub from "../images/github.png";
import logoWhats from "../images/whatsapp.png";
import logoEmail from "../images/logoCorreo.png";
import personalImage from "../images/danielPerfil.png";
import LittleCardProjectPost from "../components/LittleCardProjectPost.jsx";
// import Btn from "../components/Btn.jsx";
import "../components/styles/Main.css";

function Main() {
  return (
    <React.Fragment>
      <section className="mainContainer">
        <div className="main-container generalContainer">
          <div className="main-container">
            <div className="main-container__img">
              <img src={personalImage} alt="Personal img" />
            </div>
            <div className="main-container__description">
              <p className="ParagranphsImpact">
                Hola, soy <span>Daniel Vásquez</span>.
              </p>
              <p className="main-container__paragraphs">
                Soy <span>desarrollador frontend Developer</span>, con más de un
                año de estudio autónomo y práctica constante, con pasión por el
                diseño web y con nunca parar de aprender.
              </p>
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
      </div>
      <Contacts />
    </React.Fragment>
  );
}

export default Main;
