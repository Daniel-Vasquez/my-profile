import React from "react";
import { Link } from "react-router-dom";
import "../components/styles/Home.css";

function Home() {
  return (
    <React.Fragment>
      <main className="home-main">
        <section>
          <h1 className="home-main__text">Conoce las novedades</h1>
          <Link className="home-main__button" to="/blogs">
            Entra ya!
          </Link>
        </section>
      </main>
    </React.Fragment>
  );
}

export default Home;
