import { Link } from "react-router-dom";
import "./styles/MobileCard.css";

function MobileCard({ imageMobile, title, link }) {
  return (
    <Link
      className="containerImages-mobile"
      to={{ pathname: link }}
      target="_blank"
      title="Visitar sitio"
    >
      <img
        className="containerImages-mobile__img"
        src={`/${imageMobile}`}
        alt={title}
      />
      <div className="cicleMobile"></div>
    </Link>
  );
}

export default MobileCard;
