import React from "react";
import { Link } from "react-router-dom";
import certificates from "../certificates";
import "./styles/Certificates.css";

const Certificates = () => {
  return (
    <section className="containercCertificates">
      <div className="containercCertificates-title">
        <p className="containercCertificates-title__text">Certificaciones</p>
      </div>
      <div className="containerListCertificates">
        {certificates.map((certificate, index) => {
          return (
            <div className="listCertificates" key={index}>
              <div className="listCertificates-img">
                <img
                  className="listCertificates-img__img"
                  src={certificate.img}
                  alt={certificate.title}
                />
              </div>
              <div className="listCertificates-description">
                <Link
                  className="listCertificates-description__title"
                  to={{
                    pathname: certificate.link,
                  }}
                  target="_blank"
                >
                  {certificate.title}
                </Link>
                <p className="listCertificates-description__institution">
                  {certificate.institution}
                </p>
                <p className="listCertificates-description__date">
                  Expedición: {certificate.date}
                </p>
              </div>
            </div>
          );
        })}
        <p className="moreCertificates">Entre otros</p>
      </div>
    </section>
  );
};

export default Certificates;
