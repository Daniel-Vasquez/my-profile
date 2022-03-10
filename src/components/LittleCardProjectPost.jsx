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
      <div className="cardsContainer generalContainer">
        {ProjectsData.map((project) => {
          return (
            <React.Fragment key={project.id}>
              <div className="card">
                <div className="card-img">
                  <img
                    className="card-img__img"
                    src={project.img}
                    alt={project.title}
                  />
                </div>
                <div className="card-description">
                  <div className="description-title">
                    <Link
                      className="description-title__btn"
                      to={{ pathname: project.link }}
                      target="_black"
                      title="Visitar sitio web"
                    >
                      <p className="description-title__title">
                        {project.title}
                      </p>
                    </Link>
                  </div>
                  <div className="description-buttons">
                    <Link
                      className="description-buttons__btn"
                      to={`/project/${project.path}`}
                      title="Ver detalles del proycto"
                    >
                      Detalles
                    </Link>
                    <Link
                      className="description-buttons__btn"
                      to={{ pathname: project.link }}
                      target="_black"
                      title="Visitar sitio web"
                    >
                      Visitar
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
