import React from "react";

function MobileCard({ imageMobile, title }) {
  return (
    <div className="containerImages-mobile">
      <img
        className="containerImages-mobile__img"
        src={`/${imageMobile}`}
        alt={title}
        width="146px"
        height="286px"
      />
      <div className="cicleMobile"></div>
    </div>
  );
}

export default MobileCard;
