import React from "react";
import { Link } from "react-router-dom";
import logoProfile from "../images/logoProfile.png";
import "./styles/Navbar.css";

function Navbar() {
  return (
    <header className="headerContainer">
      <section className="headerContainer-logo">
        <Link className="headerContainer-logo__link" to="/">
          <img
            className="headerContainer-logo__img"
            src={logoProfile}
            alt="Logo of my profile"
          />
        </Link>
      </section>
      <section className="headerContainer-link">
        <Link className="headerContainer-link__projects" to="/projects">
          Projects
        </Link>
        <Link className="headerContainer-link__perfil" to="/perfil">
          Perfil
        </Link>
      </section>
    </header>
  );
}

export default Navbar;
