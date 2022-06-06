import React from "react";
import { Link } from "react-router-dom";
import ProjectsData from "../api";
import logoGithub from "../images/logo-github.png";
import logoWhats from "../images/logo-whatsapp.png";
import logoEmail from "../images/logo-correo.png";
import personalImage from "../images/daniel.png";
import Btn from "../components/Btn.jsx";
import "../components/styles/Main.css";

function LinkWithImage({ linkClassName, url, text, imgClassName, img }) {
  return (
    <Link
      className={linkClassName}
      to={{ pathname: url }}
      target="_black"
    >
      {text}
      <img className={imgClassName} src={img} alt="Image" />
    </Link>
  );
}

function Main() {
  const outstandingProjects = ProjectsData.slice(0, 4);

  return (
    <>
      <section className="mainContainer">
        <div className="generalContainer">
          <div className="main-container">
            <div className="main-container__img">
              <LinkWithImage 
                url="https://www.linkedin.com/in/daniel-vasquez-nepomuceno/"
                imgClassName="main-containerImg"
                img={personalImage}
              />
            </div>
            <div
              className="main-container__description"
            >
              <p className="line anim-typewriter">
                Hola, soy{" "}
                <span className="main-container__span">Daniel Vásquez</span>.
              </p>
              <p className="main-container__paragraphs">
                Soy <span>desarrollador frontend Developer</span>, con más de un
                año de estudio autónomo y práctica constante, con pasión por el
                diseño web y con nunca parar de aprender.
              </p>
              <LinkWithImage 
                linkClassName="main-container__mail"
                url="mailto:dani.vasquez.dev@gmail.com"
                text="¿Trabajamos juntos?"
                imgClassName="main-mail__logo"
                img={logoEmail}
              />
              <div className="containerLinks">
                <LinkWithImage 
                  linkClassName="mainContainer-whats__link"
                  url="https://api.whatsapp.com/send?phone=525531483433"
                  text="whatsApp"
                  imgClassName="mainContainer-whats__img"
                  img={logoWhats}
                />
                <LinkWithImage 
                  linkClassName="mainContainer-git__link"
                  url="https://github.com/Daniel-Vasquez"
                  text="Github"
                  imgClassName="mainContainer-git__img"
                  img={logoGithub}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="projectsContainer">
        <h1 className="projectsContainer-title">
          Proyectos
        </h1>
        <div className="outstandingProjectsContainer generalContainer">
          {outstandingProjects.map((project) => {
            return (
              <React.Fragment key={project.id}>
                <div className="outstandingProjects-container">
                  <div className="outstandingProjects-image">
                    <img
                      className="outstandingProjects-img"
                      src={project.img}
                      alt=""
                    />
                  </div>
                  <div className="outstandingProjects-info">
                    <p className="outstandingProjects-title">{project.title}</p>
                    <p className="outstandingProjects-description">
                      {project.description}
                    </p>
                    <div className="outstandingProjects-btn">
                      <Link
                        className="outstandingProjects-btn__details"
                        to={`/project/${project.path}`}
                        title="Ver detalles del proycto"
                      >
                        Detalles
                      </Link>
                      <Link
                        className="outstandingProjects-btn__visit"
                        to={{ pathname: project.link }}
                        target="_black"
                        title="Visitar sitio web"
                      >
                        Visitar
                      </Link>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
        <div className="outstandingProjects-allProducts generalContainer">
          <Btn
            name="Ver todos los proyectos -->"
            direction="/projects"
            color="white"
          />
        </div>
      </section>

      <div className="instagramContainer">
        <div className="generalContainer">
          <h2
            className="instagramContainer-title"
          >
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
            <div
              className="instagramContainer-description"
            >
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
