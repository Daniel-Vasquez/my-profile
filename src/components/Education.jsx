import React from "react";
import education from "../education";
import "./styles/Education.css";

const Education = () => {
  return (
    <>
      <section className="containerEducation">
        <div className="containerEducation-title">
          <p className="containerEducation-title__text">Educación</p>
        </div>
        <div className="containerListEducation">
          {education.map((element, index) => {
            return (
              <div className="listEducation" key={index}>
                <div className="listEducation-img">
                  <img
                    className="listEducation-img__img"
                    src={element.logo}
                    alt={element.name}
                  />
                </div>
                <div className="listEducation-descrption">
                  <h4 className="listEducation-descrption__name">
                    {element.name}
                  </h4>
                  <p className="listEducation-descrption__title">
                    {element.title}
                  </p>
                  <p className="listEducation-descrption__date">
                    {element.date}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Education;
