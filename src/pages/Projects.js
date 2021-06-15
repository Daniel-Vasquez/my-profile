import React from "react";
import CardProjectPost from "../components/CardProjectPost";
import LittleCardProjectPost from "../components/LittleCardProjectPost";
import Contacts from "../components/Contacts";
import "../components/styles/Projects.css";

class Projects extends React.Component {
  render() {
    return (
      <React.Fragment>
        <CardProjectPost
          title="Instagram"
          image="insta.gif"
          description="Copy of Instagram page."
          link="https://instagram-dani.vercel.app/"
        />
        <section className="projects-posts-container">
          <div className="grid-container">
            <h3 className="projects-posts-container__title">
              Proyectos destacados
            </h3>
            <div className="projects-posts-container__card">
              <LittleCardProjectPost />
            </div>
          </div>
        </section>
        <Contacts />
      </React.Fragment>
    );
  }
}

export default Projects;
