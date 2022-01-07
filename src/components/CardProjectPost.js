import React from "react";
import { Link } from "react-router-dom";
import "./styles/CardProjectPost.css";

function CardProjectPost(props) {
  return (
    <section className="projectContainer">
      <div className="projectContainer-blogs grid-container">
        <h3 className="projectContainer-blogs__title">{props.title}</h3>

        <div className="projectContainer-coverPage">
          <Link
            className="projectContainer-info__link"
            to={{ pathname: props.link }}
            target="_blank"
          >
            <img
              className="projectContainer-coverPage__img"
              src={`/${props.img}`}
              alt={props.title}
            />
          </Link>
        </div>

        <div className="projectContainer-info">
          <h2 className="projectContainer-info__title">{props.title}</h2>
          <div className="projectContainer-info__paragraph">
            {props.children}
          </div>
          <div className="projectContainer-links">
            <Link
              className="projectContainer-sitio__link"
              to={{ pathname: props.link }}
              target="_blank"
            >
              Visitar sitio
            </Link>
            <Link
              className="projectContainer-codigo__link"
              to={{ pathname: props.codigo }}
              target="_blank"
            >
              Ver código
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CardProjectPost;
