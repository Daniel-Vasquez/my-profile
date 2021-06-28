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
              <input
                className="radio"
                type="radio"
                name="card"
                id={project.id}
              />

              <label
                style={{
                  backgroundImage: `url("${project.gif}")`,
                }}
                className="content"
                htmlFor={project.id}
              >
                <h3 className="content-title">{project.title}</h3>
                <div className="cardLinks">
                  <Link className="card-title" to={`/project/${project.path}`}>
                    Leer más
                  </Link>
                  <Link
                    className="card-title"
                    to={{ pathname: project.link }}
                    target="_black"
                  >
                    Visitar sitio
                  </Link>
                </div>
              </label>
            </React.Fragment>
          );
        })}
      </div>
    );
  }
}

export default LittleCardProjectPost;
