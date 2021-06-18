import React from "react";
import { Link } from "react-router-dom";
import CardProjectPost from "../components/CardProjectPost";
import ProjectsDate from "../api";
import DeskCard from "../components/DeskCard";
import MobileCard from "../components/MobileCard";
import Contacts from "../components/Contacts";
import "../components/styles/Project.css";

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
        <CardProjectPost {...project} />
        <div className="containerImages grid-container">
          <div className="containerMobile">
            <MobileCard
              imageMobile={project.imageMobile}
              title={project.title}
            />
          </div>
          <div className="containerDesk">
            <DeskCard imageDesk={project.gif} title={project.title} />
          </div>
        </div>
        <div className="containerButton">
          <Link className="containerButton-button" to="/projects">
            Volver a Projects
          </Link>
        </div>
        <Contacts />
      </React.Fragment>
    );
  }
}

export default Project;
