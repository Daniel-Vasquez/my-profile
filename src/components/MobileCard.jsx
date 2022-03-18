import { Link } from "react-router-dom";
import "./styles/MobileCard.css";

const LoadingImgMobileCard = () => (
  <p className="loadingImgMobileCard">Cargando...</p>
);

function MobileCard({ imageMobile, title, link }) {
  return (
    <Link
      className="containerImages-mobile"
      to={{ pathname: link }}
      target="_blank"
      title="Visitar sitio"
    >
      {!imageMobile && <LoadingImgMobileCard />}
      {imageMobile && (
        <img
          className="containerImages-mobile__img"
          src={`/${imageMobile}`}
          alt={title}
        />
      )}
      <div className="cicleMobile"></div>
    </Link>
  );
}

export default MobileCard;
