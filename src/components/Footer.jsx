import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import FooterLogos from "./FooterLogos";
import logoGithub from "../images/logo-github.png";
import logoWhats from "../images/logo-whatsapp.png";
import logoEmail from "../images/logo-correo.png";
import logoLinkedin from "../images/logo-linkedin.png";
import "./styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer generalContainer">
      <div className="footer-info">
        <div className="contactsContainer">
          <ul className="wrapper">
            <FooterLogos
              socialClassName="gitHub"
              url="https://github.com/Daniel-Vasquez"
              logo={logoGithub}
              name="GitHub"
            />
            <FooterLogos
              socialClassName="whatsApp"
              url="https://api.whatsapp.com/send?phone=525531483433"
              logo={logoWhats}
              name="WhatsApp"
            />
            <FooterLogos
              socialClassName="correo"
              url="mailto:dani.vasquez.dev@gmail.com"
              logo={logoEmail}
              name="Correo"
            />
            <FooterLogos
              socialClassName="linkedin"
              url="https://www.linkedin.com/in/daniel-vasquez-nepomuceno/"
              logo={logoLinkedin}
              name="Linkedin"
            />
          </ul>
        </div>
        <div className="contactsContainer-me">
          <Link className="contactsContainer-me__link" to="/perfil">
            Acerca de mi
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
