import React from "react";
import { Link } from "react-router-dom";
import logoLinkedin from "../images/linkedin.png";
import logoGithub from "../images/github.png";
import logoWhats from "../images/whatsapp.png";
import "./styles/Contacts.css";

function Contacts() {
  return (
    <section className="contactContainer">
      <div className="contactContainer-left">
        <Link
          className="contactContainer-envelope__link"
          to={{
            pathname: "https://www.linkedin.com/in/daniel-vasquez-nepomuceno/",
          }}
          target="_black"
        >
          <img
            className="contactContainer-left__img"
            src={logoLinkedin}
            alt="Contacto"
          />
        </Link>
      </div>

      <div className="contactContainer-right">
        <Link
          className="contactContainer-heart__link"
          to={{ pathname: "https://github.com/Daniel-Vasquez" }}
          target="_black"
        >
          <img
            className="contactContainer-right__img"
            src={logoGithub}
            alt="Contacto"
          />
        </Link>
      </div>

      <div className="contactContainer-whats">
        <Link
          className="contactContainer-whats__link"
          to={{ pathname: "https://api.whatsapp.com/send?phone=525585534135" }}
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
