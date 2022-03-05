import React from "react";
import './styles/MobileCard.css'

function MobileCard({ imageMobile, title }) {
  return (
    <div className="containerImages-mobile">
      <img
        className="containerImages-mobile__img"
        src={`/${imageMobile}`}
        alt={title}
      />
      <div className="cicleMobile"></div>
    </div>
  );
}

export default MobileCard;
