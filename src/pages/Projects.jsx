import LittleCardProjectPost from "../components/LittleCardProjectPost.jsx";
import Btn from '../components/Btn.jsx'
import Contacts from "../components/Contacts.jsx";
import "../components/styles/Projects.css";

function Projects() {
  return (
    <div className="projects">
      <div className="projects-options">
        <h2 className="projects-options__title">Proyectos</h2>
        <Btn name='Inicio' direction='main'/>
      </div>
      <section className="projects-cards">
        <LittleCardProjectPost />
      </section>
      <div className="start-button">
        <Btn name='Inicio' direction='main'/>
      </div>
      <Contacts/>
    </div>
  );
}

export default Projects;
