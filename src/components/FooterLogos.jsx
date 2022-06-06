import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import "./styles/FooterLogos.css"

const FooterLogos = ({url, logo, text}) => {
  return (
    <div className="contactCustom">
      <Link
        className="contactCustom-link"
        to={{ pathname: url }}
        target="_black"
      >
        <img
          className="contactCustom-img"
          src={logo}
          alt="Contacto"
          title="GitHub"
        />
        <p className="contactCustom-title">{text}</p>
      </Link>
    </div>
  )
}

export default FooterLogos