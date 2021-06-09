import React from "react";
import { Link } from "react-router-dom";
import logoBlogPost from "../images/lorenzo-herrera.jpg";
import "./styles/CardBlogPost.css";

function CadBlogPost() {
  return (
    <section className="blogContainer">
      <div className="blogContainer-blogs grid-container">
        <h3 className="blogContainer-blogs__title">Soy un título</h3>

        <div className="blogContainer-coverPage">
          <img
            className="blogContainer-coverPage__img"
            src={logoBlogPost}
            alt="Logo Post"
          />
        </div>

        <div className="blogContainer-info">
          <h2 className="blogContainer-info__title">
            Título <br /> del blogpost
          </h2>
          <p className="blogContainer-info__paragraph">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
            vero veniam officiis? Error magnam numquam.
          </p>
          <Link className="blogContainer-info__link" to="/">
            Leer más
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CadBlogPost;
