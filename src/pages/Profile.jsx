import React from "react";
import { Link } from "react-router-dom";
import Contacts from "../components/Contacts.jsx";
import logoProfile from "../images/danielPerfil.png";
import projectData from "../api";
import MobileCard from "../components/MobileCard.jsx";
import "../components/styles/Profile.css";

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = { projectData };
  }

  render() {
    const profileCardOutstanding = this.state.projectData;
    const returnCard = profileCardOutstanding.slice(0, 3);

    return (
      <div>
        <section className="profileContainer">
          <div className="profile-container generalContainer">
            <div className="presentation">
              <h3>
                Soy Desarrollador Frontend con más de un año de preparación, de
                estudio y práctica.
              </h3>
              <p>
                He tomado cursos base de HTMl y CSS (Maquetación, responsive
                design y CSS Grid), además de otros cursos más avanzados
                referente a JavaScript como: Web Components, Asíncronismo con
                javaScript, manipulación del DOM (con puro vanilla js), React y
                python (tema en curso).
              </p>
              <p className="main-container__paragraphs">
                Me encanta aprender nuevas cosas, soy una persona sumamente
                obstinada y perseverante, pero sé en qué momento pedir ayuda.
              </p>
              <p className="main-container__paragraphs">
                Me fascina el diseño web. A continuación te presento algunos de
                los proyectos más destacados en que he trabajado, los cuales
                reflejan el gusto por el CSS y la implementación de React JS,
                librería de javaScript.
              </p>
            </div>
            <div className="presentationImg">
            <Link
              className="profile-container__link"
              to={{
                pathname:
                  "https://www.linkedin.com/in/daniel-vasquez-nepomuceno/",
              }}
              target="_black"
            >
              <acronym title="Linkedin">
                <img
                  className="profile-container__img"
                  src={logoProfile}
                  alt="Daniel Vásquez"
                />
              </acronym>
            </Link>
            </div>
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
                    >
                      <acronym title="Visitar sitio">{element.title}</acronym>
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
        <Contacts />
      </div>
    );
  }
}

export default Profile;
