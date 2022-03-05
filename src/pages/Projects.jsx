import LittleCardProjectPost from "../components/LittleCardProjectPost.jsx";
import Btn from '../components/Btn.jsx'
import "../components/styles/Projects.css";

function Projects() {
  return (
    <div className="projects">
      <div className="projects-options">
        <h2 className="projects-options__title">Proyectos</h2>
        <Btn name='Homa' direction='main'/>
      </div>
      <section className="projects-cards">
        <LittleCardProjectPost />
      </section>
      <div className="linkHome">
        <Btn name='Homa' direction='main'/>
      </div>
    </div>
  );
}

export default Projects;
