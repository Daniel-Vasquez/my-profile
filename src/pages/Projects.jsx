import LittleCardProjectPost from "../components/LittleCardProjectPost.jsx";
import Contacts from "../components/Contacts.jsx";
import "../components/styles/Projects.css";

function Projects() {
  return (
    <div className="projects">
      <div className="projects-options">
        <div className="generalContainer">
          <h2 className="projects-options__title">Proyectos</h2>
        </div>
      </div>
      <section className="projects-cards">
        <LittleCardProjectPost />
      </section>
      <Contacts />
    </div>
  );
}

export default Projects;
