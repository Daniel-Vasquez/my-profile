import React from "react";
import { Link } from "react-router-dom";
import logoProfile from "../images/logoProfile.png";
import "./styles/Navbar.css";

function Navbar() {
  return (
    <header className="headerContainer">
      <section className="headerContainer-logo">
        <Link to="/">
          <img
            className="headerContainer-logo__img"
            src={logoProfile}
            alt="Logo of my profile"
          />
        </Link>
      </section>
      <section className="headerContainer-link">
        <Link className="headerContainer-link__anchor" to="/perfil">
          Perfil
        </Link>
      </section>
    </header>
  );
}

export default Navbar;
