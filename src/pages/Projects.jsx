import { useEffect } from "react";

import React from "react";
import LittleCardProjectPost from "../components/LittleCardProjectPost.jsx";
import Contacts from "../components/Contacts.jsx";
import "../components/styles/Projects.css";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

function Projects() {
  return (
    <React.Fragment>
      <ScrollToTopOnMount />
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
    </React.Fragment>
  );
}

export default Projects;
