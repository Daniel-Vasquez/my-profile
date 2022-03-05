import React from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";

function Navbar() {
  return (
    <header className="headerContainer">
      <section className="headerContainer-title">
        <Link className="headerContainer-title__link" to="/">
            Mi portafolio
        </Link>
      </section>
      <section className="headerContainer-link">
        <div className="headerContainer-containerLinks">
          <Link className="headerContainer-link__projects" to="/projects">
            Proyectos
          </Link>
          <Link className="headerContainer-link__perfil" to="/perfil">
            Perfil
          </Link>
        </div>
      </section>
    </header>
  );
}

export default Navbar;
