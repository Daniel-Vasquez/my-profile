import React from "react";
import "./styles/ProfileCardProject.css";

function ProfileCardProject(props) {
  return (
    <article className="project-container">
      <h4 className="project-container__title">{props.title}</h4>
      <p className="project-container__description">{props.description}</p>
    </article>
  );
}

export default ProfileCardProject;
