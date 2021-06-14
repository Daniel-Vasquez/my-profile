import React from "react";
import Contacts from "../components/Contacts";
import logoProfile from "../images/profile.jpg";
import projectData from "../api";
import "../components/styles/Profile.css";
class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = { projectData };
  }

  render() {
    const profileCardOutstanding = this.state.projectData;
    const returnCard = profileCardOutstanding.splice(0, 3);

    return (
      <div>
        <section className="profileContainer">
          <div className="profile-container grid-container">
            <img className="profile-container__img" src={logoProfile} alt="" />
            <div>
              <h2>Hola, mi nombre es Daniel Vásquez.</h2>
              <p>
                Desarrollador Frontend con un año de preparación, de estudio y
                practica.
              </p>
              <p>
                He tomado cursos base de HTMl y CSS (Maquetación, responsive
                design y CSS Grid), y he tomado cursos un poco más avanzados
                referente a JavaScript como: Web Components, Asíncronismo con
                javaScript , manipulación del DOM (con puro vanilla js), React y
                Redux (tema en curso).
              </p>
            </div>
          </div>
        </section>
        <section className="ProyectsContainer">
          <div className="grid-container">
            <h3 className="ProyectsContainer-title">Proyectos</h3>
            <div className="outstandingContainer">
              {returnCard.map((element) => {
                return (
                  <article
                    key={element.id}
                    className="outstandingContainer-elements"
                  >
                    <h4 className="project-container__title">
                      {element.title}
                    </h4>
                    <p className="project-container__description">
                      {element.description}
                    </p>
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
