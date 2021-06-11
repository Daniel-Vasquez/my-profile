import React from "react";
import Contacts from "../components/Contacts";
import logoProfile from "../images/profile.jpg";
// import ProfileCardProject from "../components/ProfileCardProject";
import projectData from "../api";
import "../components/styles/Profile.css";
class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = { projectData };
  }

  render() {
    const thisArg = 3;
    return (
      <div>
        <section className="profileContainer">
          <div className="profile-container grid-container">
            <img src={logoProfile} alt="" />
            <div>
              <h2>Hola, mi nombre es Daniel Vasquez.</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                dolore velit commodi suscipit rerum sunt maxime aliquam laborum
                odit, temporibus reprehenderit? Esse numquam commodi saepe quis
                accusamus.
              </p>
            </div>
          </div>
        </section>
        <section className="ProyectsContainer">
          <div className="grid-container">
            <h3>Proyectos</h3>
            {this.state.projectData.map((project) => {
              return (
                <article className="project-container">
                  <h4 className="project-container__title">{project.title}</h4>
                  <p className="project-container__description">
                    {project.description}
                  </p>
                </article>
              );
            })}
          </div>
        </section>
        <Contacts />
      </div>
    );
  }
}

export default Profile;
