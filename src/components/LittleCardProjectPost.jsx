import React from "react";
import { Link } from "react-router-dom";
import ProjectsData from "../api";
import "./styles/LittleCardProjectPost.css";

class LittleCardProjectPost extends React.Component {
  constructor() {
    super();

    this.state = { ProjectsData };
  }

  render() {
    return (
      <div className="general-container">
        {ProjectsData.map((project) => {
          return (
            <React.Fragment key={project.id}>
              <div className="card">
                <div className="card-img">
                  <img
                    className="card-img__img"
                    src={project.gif}
                    alt={project.title}
                  />
                </div>
                <div className="card-description">
                  <div className="description-title">
                    <Link
                      className="description-title__btn"
                      to={{ pathname: project.link }}
                      target="_black"
                    >
                      <p className="description-title__title">
                        <acronym title="Visitar sitio">{project.title}</acronym>
                      </p>
                    </Link>
                  </div>
                  <div className="description-buttons">
                    <Link
                      className="description-buttons__btn"
                      to={`/project/${project.path}`}
                    >
                      Leer más
                    </Link>
                    <Link
                      className="description-buttons__btn"
                      to={{ pathname: project.link }}
                      target="_black"
                    >
                      Visitar sitio
                    </Link>
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    );
  }
}

export default LittleCardProjectPost;
