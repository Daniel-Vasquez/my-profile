import React, { Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import Icons from "./Icons";
import "./styles/CardProjectPost.css";

const CarouselImages = lazy(() => import("./CarouselImages"));

function CardProjectPost(props) {
  return (
    <section className="projectContainer">
      <div className="projectContainer-blogs generalContainer">
        <h3 className="projectContainer-blogs__title">{props.title}</h3>

        <div className="projectContainer-coverPage">
          <Suspense fallback={<div>Loading...</div>}>
            <CarouselImages ProjectsData={props} />
          </Suspense>
        </div>

        <div className="projectContainer-info">
          <h2 className="projectContainer-info__title">{props.title}</h2>
          <div className="projectContainer-info__paragraph">
            {props.children}
            {props.description}
            <Icons technologies={props.technologies} />
            <span className="projectContainer-info__span">
              *Porcentajes tomados de cada proyecto en GitHub
            </span>
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
