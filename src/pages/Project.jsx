// import { useEffect } from "react";

import React from "react";
import CardProjectPost from "../components/CardProjectPost.jsx";
import ProjectsDate from "../api";
import DeskCard from "../components/DeskCard.jsx";
import MobileCard from "../components/MobileCard.jsx";
import Contacts from "../components/Contacts.jsx";
import Btn from "../components/Btn.jsx";
import "../components/styles/Project.css";

class ScrollToTopOnMount extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return null;
  }
}

class Project extends React.Component {
  render() {
    const projectName = this.props.match.params.name;

    const project = ProjectsDate.find(
      (project) => project.path === projectName
    );

    if (!project) {
      return (
        <h1>
          No tenemos el proyecto <strong>{projectName}</strong>
        </h1>
      );
    }
    return (
      <React.Fragment>
        <ScrollToTopOnMount />
        <CardProjectPost {...project} />
        <div className="generalContainer">
          <div className="containerImages generalContainer">
            <div className="containerMobile">
              <p className="containerMobile-title">Versión Mobile</p>
              <MobileCard
                imageMobile={project.imageMobile}
                title={project.title}
                link={project.link}
              />
            </div>
            <div className="containerDesk">
              <p className="containerDesk-title">Versión Desktop</p>
              <DeskCard
                imageDesk={project.gif}
                title={project.title}
                link={project.link}
              />
            </div>
          </div>
        </div>
        <div className="containerButton">
          <Btn name="Volver a Proyectos" direction="/projects" color="white" />
        </div>
        <Contacts />
      </React.Fragment>
    );
  }
}

export default Project;
