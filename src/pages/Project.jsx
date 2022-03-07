import React from "react";
import { Link } from "react-router-dom";
import CardProjectPost from "../components/CardProjectPost.jsx";
import ProjectsDate from "../api";
import DeskCard from "../components/DeskCard.jsx";
import MobileCard from "../components/MobileCard.jsx";
import Contacts from "../components/Contacts.jsx";
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
        <div className="containerImages generalContainer">
          <div className="containerMobile">
            <MobileCard
              imageMobile={project.imageMobile}
              title={project.title}
              link={project.link}
            />
          </div>
          <div className="containerDesk">
            <DeskCard
              imageDesk={project.gif}
              title={project.title}
              link={project.link}
            />
          </div>
        </div>
        <div className="containerButton">
          <Link className="containerButton-button" to="/projects">
            Volver a Proyectos
          </Link>
          <Link className="containerButton-button" to="/main">
            Home
          </Link>
        </div>
        <Contacts />
      </React.Fragment>
    );
  }
}

export default Project;
