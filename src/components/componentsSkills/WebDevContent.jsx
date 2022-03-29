import React from "react";
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
          <li className="item">{item2}</li>
          <li className="item">{item3}</li>
          <li className="item">{item4}</li>
        </ul>
      </div>
      <div className="skillscontent-container__tools">
        <h3 className="skillscontent-container__tools--title">{titleTools}</h3>
        <hr className="skillscontent-container__tools--line" />
        <ul className="skillscontent-container__tools--list">
          <li className="item">{tool}</li>
          <li className="item">{tool2}</li>
        </ul>
      </div>
    </div>
  );
};

export default WebDevContent;
