import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectsData from "../api";
import { Link } from "react-router-dom";
import "./styles/NewLittleCard.css";

export default function NewLittleCard() {
  const [selectedTab, setSelectedTab] = useState(ProjectsData[0]);

  const Card = () => {
    return (
      <React.Fragment key={selectedTab.id}>
        <div
          className="newCard"
          style={{
            backgroundImage: `url('${selectedTab.img}')`,
          }}
        >
          <div className="newCard-description">
            <div className="cardDescription-buttons">
              <Link
                className="cardDescription-buttons__btn"
                to={`/project/${selectedTab.path}`}
                title="Ver detalles del proycto"
              >
                Detalles
              </Link>
              <Link
                className="cardDescription-buttons__btn"
                to={{ pathname: selectedTab.link }}
                target="_black"
                title="Visitar sitio web"
              >
                Visitar
              </Link>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  };

  return (
    <div className="containerPrincipalCard">
      <nav className="navCard">
        <ul className="ulCard">
          {ProjectsData.map((project) => (
            <li
              id="liCard"
              key={project.id}
              className={project === selectedTab ? "selected liCard" : ""}
              onClick={() => setSelectedTab(project)}
            >
              {`${project.title}`}
              {project === selectedTab ? (
                <motion.div className="underline" layoutId="underline" />
              ) : null}
            </li>
          ))}
        </ul>
      </nav>
      <main className="mainCard">
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={selectedTab ? selectedTab.title : "empty"}
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.15 }}
          >
            {selectedTab ? <Card /> : ""}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
