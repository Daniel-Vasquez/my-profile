import React from "react";
import CardBlogPost from "../components/CardBlogPost";
import blogDate from "../api";
import "../components/styles/Blog.css";

class Blog extends React.Component {
  render() {
    const projectName = this.props.match.params.name;

    const project = blogDate.find((project) => project.path === projectName);

    if (!project) {
      return (
        <h1>
          No tenemos el proyecto <strong>{projectName}</strong>
        </h1>
      );
    }
    return (
      <React.Fragment>
        <CardBlogPost {...project} />
        <div className="containerImages grid-container">
          <div className="containerImages-desk">
            <img
              className="containerImages-desk__img"
              src="https://fondosmil.com/fondo/17010.jpg"
              alt="Hola"
            />
            <div className="cicle"></div>
          </div>
          <div className="containerImages-mobile">
            <img
              className="containerImages-mobile__img"
              src="https://fondosmil.com/fondo/17010.jpg"
              alt="Hola"
            />
            <div className="cicle"></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Blog;
