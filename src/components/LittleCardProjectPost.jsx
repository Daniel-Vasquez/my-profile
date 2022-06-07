import React from "react";
import { Link } from "react-router-dom";
import ProjectsData from "../api";
import "./styles/LittleCardProjectPost.css";

import { motion } from "framer-motion";

function LittleCardProjectPost() {
  return (
    <div className="cardProject generalContainer">
      {ProjectsData.map((project) => {
        return (
          <React.Fragment key={project.id}>
            <motion.div
              className="cardProject-card"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="cardProject-img">
                <span className="cardProject-img-sapn">
                  <img 
                    className="cardProject-img-sapn__img" 
                    src={project.img} alt={project.title}
                  />
                </span>
              </div>
              <div className="cardProject-info">
                <p className="cardProject-title">{project.title}</p>
                <p className="cardProject-description">{project.description}</p>
                <div className="cardProject-links">
                  <Link
                    className="cardProject-links-btn__details"
                    to={`/project/${project.path}`}
                    title="Ver detalles del proycto"
                  >
                    Detalles
                  </Link>
                  <Link
                    className="cardProject-links-btn__visit"
                    to={{ pathname: project.link }}
                    target="_black"
                    title="Visitar sitio web"
                  >
                    Visitar
                  </Link>
                </div>
              </div>
            </motion.div>
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default LittleCardProjectPost;
