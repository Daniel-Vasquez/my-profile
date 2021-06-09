import React from "react";
import { Link } from "react-router-dom";
import logoEnvelope from "../images/sobre.png";
import logoHeart from "../images/corazon.png";
import "./styles/Contacts.css";

function Contacts() {
  return (
    <section className="contactContainer">
      <div className="contactContainer-left">
        <img
          className="contactContainer-left__img"
          src={logoEnvelope}
          alt="Contacto"
        />
        <div className="contactContainer-envelope">
          <Link className="contactContainer-envelope__link" to="/">
            Contacto
          </Link>
          <p className="contactContainer-envelope__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
            libero deleniti ut repudiandae minima.
          </p>
        </div>
      </div>

      <div className="contactContainer-right">
        <img
          className="contactContainer-right__img"
          src={logoHeart}
          alt="Contacto"
        />
        <div className="contactContainer-heart">
          <Link className="contactContainer-heart__link" to="/">
            Escribe
          </Link>
          <p className="contactContainer-heart__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
            libero deleniti ut repudiandae minima.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
