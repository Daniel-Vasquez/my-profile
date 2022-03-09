import { Link } from "react-router-dom";
import "./styles/DeskCard.css";

function DeskCard({ imageDesk, title, link }) {
  return (
    <Link
      className="containerImages-desk"
      to={{ pathname: link }}
      target="_blank"
    >
      <img
        className="containerImages-desk__img"
        src={`/${imageDesk}`}
        alt={title}
        title="Visitar sitio"
        loading="lazy"
      />
      <div className="cicle"></div>
    </Link>
  );
}

export default DeskCard;
