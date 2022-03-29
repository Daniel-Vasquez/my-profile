import React from "react";
import WebDevContent from "./componentsSkills/WebDevContent.jsx";
import LayoutContent from "./componentsSkills/LayoutContent.jsx";
import "./styles/Skills.css";

const Skills = () => {
  return (
    <>
      <h2 className="skills-container__title">Habilidades</h2>
      <div className="skills-container" id="skills">
        <WebDevContent
          title="Desarrollo"
          titleTechnologies="Tecnologías"
          item="JavaScript"
          item2="React"
          item3="npm"
          item4="Git"
          titleTools="Herramientas"
          tool="VSCode"
          tool2="GitHub"
        />
        <LayoutContent
          title="Maquetación web"
          titleTechnologies="Tecnologías"
          item="HTML5"
          item2="CSS3"
          item3="CSS Grid"
          item4="Flexbox"
          titleTools="Herramientas"
          tool="Figma (Conceptos básicos)"
        />
      </div>
    </>
  );
};

export default Skills;
