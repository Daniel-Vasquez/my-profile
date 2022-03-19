import React from "react";
import LittleCardProjectPost from "../components/LittleCardProjectPost.jsx";
import useScrollToTop from "../hooks/useScrollToTop.js";
import "../components/styles/Projects.css";

function Projects() {
  useScrollToTop()
  return (
    <React.Fragment>
      <div className="projects">
        <div className="projects-options">
          <div className="generalContainer">
            <h2 className="projects-options__title">Proyectos</h2>
          </div>
        </div>
        <section className="projects-cards">
          <LittleCardProjectPost />
        </section>
      </div>
    </React.Fragment>
  );
}

export default Projects;
