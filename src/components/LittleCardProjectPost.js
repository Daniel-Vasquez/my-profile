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
      <React.Fragment>
        {this.state.ProjectsData.map((project) => {
          return (
            <article key={project.id} className="CarTittleContainer">
              <Link to={`/project/${project.path}`}>
                <img
                  className="CarTittleContainer-img"
                  src={project.image}
                  alt=""
                />
              </Link>
              <p className="CarTittleContainer-title">{project.title}</p>
              <p className="CarTittleContainer-description">
                {project.description}
              </p>
              <Link
                className="CarTittleContainer-link"
                to={`/project/${project.path}`}
              >
                Leer más
              </Link>
            </article>
          );
        })}
      </React.Fragment>
    );
  }
}

export default LittleCardProjectPost;
