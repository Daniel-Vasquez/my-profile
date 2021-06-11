import React from "react";
import CardBlogPost from "../components/CardBlogPost";
import blogDate from "../api";
import "../components/styles/Blog.css";
import DeskCard from "../components/DeskCard";
import MobileCard from "../components/MobileCard";

class Blog extends React.Component {
  render() {
    const projectName = this.props.match.params.name;

    const project = blogDate.find((project) => project.path === projectName);

    // console.log(project);

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
          <div className="containerDesk">
            <DeskCard imageDesk={project.image} title={project.title} />
          </div>
          <div className="containerMobile">
            <MobileCard
              imageMobile={project.imageMobile}
              title={project.title}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Blog;
