import React from "react";
import "./styles/ProfileCardProject.css";

function ProfileCardProject(props) {
  return (
    <article className="project-container">
      <h4>{props.title}</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
        recusandae cum quae accusantium iusto sit ipsum, perspiciatis eos in
        animi voluptatum quos aut? Magni quo excepturi placeat, aliquid fugiat
        modi.
      </p>
    </article>
  );
}

export default ProfileCardProject;
