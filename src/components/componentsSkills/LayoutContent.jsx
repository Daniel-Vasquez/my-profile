import React from "react";
import { Link } from "react-router-dom";
import "./SkillsWebDevAndLayoutStyles.css";

const LayoutContent = ({
  title,
  titleTechnologies,
  item,
  item2,
  item3,
  item4,
  titleTools,
  tool,
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
          <li className="item">{item2}</li>
          <li className="item">{item3}</li>
          <li className="item">{item4}</li>
        </ul>
      </div>
      <div className="skillscontent-container__tools">
        <h3 className="skillscontent-container__tools--title">{titleTools}</h3>
        <hr className="skillscontent-container__tools--line" />
        <ul className="skillscontent-container__tools--list">
          <li className="item">
            <Link
              className="item-link"
              to={{
                pathname:
                  "https://www.figma.com/file/cLMlnVLxZFDW19P46vhwT4/Budgetrip?node-id=0%3A1",
              }}
              target="_blank"
              title="Visitar proyecto"
            >
              {tool}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LayoutContent;
