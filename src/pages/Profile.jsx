import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import Contacts from "../components/Contacts.jsx";
import profilePhoto from "../images/dan-perfil.png";
import MobileCard from "../components/MobileCard.jsx";
import projectData from "../api";
import Education from "../components/Education.jsx";
import Certificates from "../components/Certificates.jsx";
import Skills from "../components/Skills.jsx";
import personalImage from "../images/daniel.png";
import useScrollToTop from "../hooks/useScrollToTop.js";
import "../components/styles/Profile.css";

const ImageProfile = () => <p className="imageProfile">Cargando...</p>;

function ScrollToTopOnMount() {
  useScrollToTop();
  return null;
}

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = { projectData };
  }

  handleButtonClicked(e) {
    const generalContainerToggle = document.getElementById(
      "generalContainerToggle"
    );
    generalContainerToggle.classList.toggle("open");
  }

  render() {
    const profileCardOutstanding = this.state.projectData;
    const returnCard = profileCardOutstanding.slice(0, 3);
    return (
      <React.Fragment>
        <ScrollToTopOnMount />
        <div className="containerGenealProfile">
          <section className="camera">
            <div id="generalContainerToggle" className="generalContainer">
              <div id="cameraContainer">
                <div className="strip"></div>
                <div className="lens"></div>
                <div className="led"></div>
                <div
                  id="btnToggle"
                  onClick={() => this.handleButtonClicked()}
                  className="btnCamera"
                ></div>
              </div>
              <div id="cameraScreen">
                <div className="cameraMirror">
                  <div className="containerCard">
                    <div className="contentCard">
                      <img className="cameraMirror-img" src={personalImage} />
                    </div>
                    <div className="cameraFlap"></div>
                  </div>
                </div>
                <center>
                  <Link
                    className="lnk"
                    to={{
                      pathname:
                        "https://www.linkedin.com/in/daniel-vasquez-nepomuceno/",
                    }}
                    target="_black"
                    title="Visitar"
                  >
                    Linkedin
                  </Link>
                </center>
              </div>
            </div>
          </section>

          <section className="profileContainer">
            <div className="generalContainer profile-container">
              <h3 className="profile-container__title">
                Soy{" "}
                <span className="profile-container__span">
                  Desarrollador Frontend
                </span>
                con más de un año de preparación, de estudio y práctica.
              </h3>

              <p className="profile-container__text1">
                He tomado cursos base de HTMl y CSS (Maquetación, CSS Grid y
                responsive design), además de otros cursos más avanzados
                referente a <span className="text1-span__js">JavaScript</span>{" "}
                como: Web Components, Asíncronismo con javaScript, manipulación
                del DOM (con puro vanilla js),{" "}
                <span className="text1-span__react">React</span> y python (tema
                en curso).
              </p>
              <p className="profile-container__text2">
                Me encanta aprender nuevas cosas.
              </p>
              <div className="presentationImg">
                <Link
                  className="profile-container__link"
                  to={{
                    pathname:
                      "https://www.linkedin.com/in/daniel-vasquez-nepomuceno/",
                  }}
                  target="_black"
                  title="Linkedin"
                >
                  {!profilePhoto && <ImageProfile />}
                  <img
                    className="profile-container__img"
                    src={profilePhoto}
                    alt="Daniel Vásquez"
                  />
                </Link>
              </div>
              <section className="contacts">
                <p className="contacts-text">Contactos</p>
                <Contacts />
              </section>
            </div>
          </section>

          <section className="Education">
            <div className="generalContainer">
              <Education />
            </div>
          </section>

          <section className="Certificates">
            <div className="generalContainer">
              <Certificates />
            </div>
          </section>

          <section className="skills">
            <div className="generalContainer">
              <Skills />
            </div>
          </section>

          <section className="ProyectsContainer">
            <div className="generalContainer">
              <h3 className="ProyectsContainer-title">
                Proyectos que destacan por el diseño e interactividad
              </h3>
              <div className="outstandingContainer">
                {returnCard.map((element) => {
                  return (
                    <article
                      key={element.id}
                      className="outstandingContainer-elements"
                    >
                      <Link
                        className="project-container__link"
                        to={{ pathname: element.link }}
                        target="_black"
                        title="Visitar sitio"
                      >
                        {element.title}
                      </Link>
                      <MobileCard
                        imageMobile={element.imageMobile}
                        link={element.link}
                      />
                    </article>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      </React.Fragment>
    );
  }
}

export default Profile;
