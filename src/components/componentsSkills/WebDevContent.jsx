import React from "react";
import { Link } from "react-router-dom";
import "./SkillsWebDevAndLayoutStyles.css";

const WebDevContent = ({
  title,
  titleTechnologies,
  item,
  item2,
  item3,
  item4,
  titleTools,
  tool,
  tool2,
}) => {
  return (
    <div className="skillscontent-container">
      <h2 className="skillscontent-container__title">{title}</h2>
      <div className="skillscontent-container__technologies">
        <h3 className="skillscontent-container__technologies--title">
          {titleTechnologies}
        </h3>
        <hr className="skillscontent-container__technologies--line" />
        <ul className="skillscontent-container__technologies--list">
          <li className="item">{item}</li>
          <li className="item">
            <Link
              className="item-link"
              to={{
                pathname:
                  "https://platzi.com/p/DanielVas/curso/1548-course/diploma/detalle/",
              }}
              target="_blank"
              title="Visitar proyecto"
            >
              {item2}
            </Link>
          </li>
          <li className="item">
          <Link
              className="item-link"
              to={{
                pathname:
                  "https://platzi.com/p/DanielVas/curso/1763-npm/diploma/detalle/",
              }}
              target="_blank"
              title="Visitar proyecto"
            >
              {item3}
            </Link>
          </li>
          <li className="item">{item4}</li>
        </ul>
      </div>
      <div className="skillscontent-container__tools">
        <h3 className="skillscontent-container__tools--title">{titleTools}</h3>
        <hr className="skillscontent-container__tools--line" />
        <ul className="skillscontent-container__tools--list">
          <li className="item">{tool}</li>
          <li className="item">
            <Link
              className="item-link"
              to={{
                pathname: "https://github.com/Daniel-Vasquez",
              }}
              target="_blank"
              title="Visitar proyecto"
            >
              {tool2}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WebDevContent;
