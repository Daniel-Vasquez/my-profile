import React from "react";
import { Link } from "react-router-dom";
import logoLinkedin from "../images/logo-linkedin.png";
import logoGithub from "../images/logo-github.png";
import logoWhats from "../images/logo-whatsapp.png";
import logoEmail from "../images/logo-correo.png";
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
            title="Linkedin"
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
            title="GitHub"
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
            title="WhatsApp"
          />
        </Link>
      </div>
      <div className="contactContainer-email">
        <Link
          className="contactContainer-email__link"
          to={{
            pathname: "mailto:dani.vasquez.dev@gmail.com",
          }}
          target="_black"
        >
          <img
            className="contactContainer-email__img"
            src={logoEmail}
            alt="Correo de contacto"
            title="Correo"
          />
        </Link>
      </div>
    </section>
  );
}

export default Contacts;
