import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const FooterLogos = ({ socialClassName, url, logo, name }) => {
  return (
    <Link
      className={`icon ${socialClassName}`}
      to={{ pathname: url }}
      target="_black"
    >
      <span className="tooltip">{name}</span>
      <img className="icon-img" src={logo} alt={name} title={name} />
    </Link>
  );
};

export default FooterLogos;
