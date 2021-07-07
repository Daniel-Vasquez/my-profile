import React from "react";
import { Link } from "react-router-dom";
import Contacts from "../components/Contacts";
import logoProfile from "../images/danPerfil.jpg";
import projectData from "../api";
import MobileCard from "../components/MobileCard";
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
          <div className="profile-container grid-container">
            <img className="profile-container__img" src={logoProfile} alt="" />
            <div>
              <h2>Hola, mi nombre es Daniel Vásquez.</h2>
              <p>
                Desarrollador Frontend con más de un año de preparación, de
                estudio y práctica.
              </p>
              <p>
                He tomado cursos base de HTMl y CSS (Maquetación, responsive
                design y CSS Grid), además de otros cursos más avanzados
                referente a JavaScript como: Web Components, Asíncronismo con
                javaScript , manipulación del DOM (con puro vanilla js), React y
                Redux (tema en curso).
              </p>
            </div>
          </div>
        </section>
        <section className="ProyectsContainer">
          <div className="grid-container">
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
                      {element.title}
                    </Link>
                    <MobileCard imageMobile={element.imageMobile} />
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
