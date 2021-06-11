import React from "react";

function DeskCard({ imageDesk, title }) {
  return (
    <div className="containerImages-desk">
      <img
        className="containerImages-desk__img"
        src={`/${imageDesk}`}
        alt={title}
      />
      <div className="cicle"></div>
    </div>
  );
}

export default DeskCard;
