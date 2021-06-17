import React from "react";
import { Link } from "react-router-dom";
import logoLinkedin from "../images/linkedin.png";
import logoGithub from "../images/github.png";
import logoWhats from "../images/whatsapp.png";
import "./styles/Contacts.css";

function Contacts() {
  return (
    <section className="contactContainer">
      <div className="contactContainer-linkedin">
        <Link
          className="contactContainer-envelope__link"
          to={{
            pathname: "https://www.linkedin.com/in/daniel-vasquez-nepomuceno/",
          }}
          target="_black"
        >
          <img
            className="contactContainer-linkedin__img"
            src={logoLinkedin}
            alt="Contacto"
          />
        </Link>
      </div>

      <div className="contactContainer-git">
        <Link
          className="contactContainer-git__link"
          to={{ pathname: "https://github.com/Daniel-Vasquez" }}
          target="_black"
        >
          <img
            className="contactContainer-git__img"
            src={logoGithub}
            alt="Contacto"
          />
        </Link>
      </div>

      <div className="contactContainer-whats">
        <Link
          className="contactContainer-whats__link"
          to={{ pathname: "https://api.whatsapp.com/send?phone=525531483433" }}
          target="_black"
        >
          <img
            className="contactContainer-whats__img"
            src={logoWhats}
            alt="Contacto"
          />
        </Link>
      </div>
    </section>
  );
}

export default Contacts;
