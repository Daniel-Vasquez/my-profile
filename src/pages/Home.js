import React from "react";
import { Link } from "react-router-dom";
import "../components/styles/Home.css";

function Home() {
  return (
    <React.Fragment>
      <main className="home-main">
        <section>
          <h1 className="home-main__text">Frontend Developer</h1>
          <Link className="home-main__button" to="/projects">
            Entra ya!
          </Link>
        </section>
      </main>
    </React.Fragment>
  );
}

export default Home;
