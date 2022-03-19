import React, {Component, Suspense, lazy } from "react";
import ProjectsDate from "../api";
import Btn from "../components/Btn.jsx";
import useScrollToTop from "../hooks/useScrollToTop.js";
import "../components/styles/Project.css";

const CardProjectPost = lazy(() =>
  import("../components/CardProjectPost.jsx")
);

const DeskCard = lazy(() => import("../components/DeskCard.jsx"));

const MobileCard = lazy(() => import("../components/MobileCard.jsx"));

function ScrollToTopOnMount() {
  useScrollToTop();
  return null;
}

class Project extends Component {
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
        <Suspense fallback={<div>Loading...</div>}>
          <CardProjectPost {...project} />
        </Suspense>
        <div className="generalContainer">
          <div className="containerImages generalContainer">
            <div className="containerMobile">
              <p className="containerMobile-title">Versión Mobile</p>
              <Suspense fallback={<div>Loading...</div>}>
                <MobileCard
                  imageMobile={project.imageMobile}
                  title={project.title}
                  link={project.link}
                />
              </Suspense>
            </div>
            <div className="containerDesk">
              <p className="containerDesk-title">Versión Desktop</p>
              <Suspense fallback={<div>Loading...</div>}>
                <DeskCard
                  imageDesk={project.gif}
                  title={project.title}
                  link={project.link}
                />
              </Suspense>
            </div>
          </div>
        </div>
        <div className="containerButton">
          <Btn name="Volver a Proyectos" direction="/projects" color="white" />
        </div>
      </React.Fragment>
    );
  }
}

export default Project;
