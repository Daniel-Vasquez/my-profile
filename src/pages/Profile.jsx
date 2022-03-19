import { Component } from "react";
import { Link } from "react-router-dom";
import Contacts from "../components/Contacts.jsx";
import logoProfile from "../images/danielPerfil.png";
import MobileCard from "../components/MobileCard.jsx";
import projectData from "../api";
import Education from "../components/Education.jsx";
import Certificates from "../components/Certificates.jsx";
import "../components/styles/Profile.css";

const ImageProfile = () => <p className="imageProfile">Cargando...</p>;

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = { projectData };
  }

  render() {
    const profileCardOutstanding = this.state.projectData;
    const returnCard = profileCardOutstanding.slice(0, 3);

    return (
      <div className="containerGenealProfile">
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
              responsive design), además de otros cursos más avanzados referente
              a <span className="text1-span__js">JavaScript</span> como: Web
              Components, Asíncronismo con javaScript, manipulación del DOM (con
              puro vanilla js), <span className="text1-span__react">React</span>{" "}
              y python (tema en curso).
            </p>
            <p className="profile-container__text2">
              Me encanta aprender nuevas cosas, soy una persona sumamente
              obstinada y perseverante, pero sé en qué momento pedir ayuda.
            </p>
            <p className="profile-container__text3">
              A continuación te presento algunos de los proyectos más destacados
              en que he trabajado, los cuales reflejan el gusto por el CSS y la
              implementación de React JS, librería de javaScript.
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
                {!logoProfile && <ImageProfile />}
                <img
                  className="profile-container__img"
                  src={logoProfile}
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
    );
  }
}

export default Profile;
