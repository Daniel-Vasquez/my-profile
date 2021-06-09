import React from "react";
import Contacts from "../components/Contacts";
import logoProfile from "../images/profile.jpg";
import ProfileCardProject from "../components/ProfileCardProject";
import "../components/styles/Profile.css";

function Profile() {
  return (
    <div>
      <section className="profileContainer">
        <div className="profile-container grid-container">
          <img src={logoProfile} alt="" />
          <div>
            <h2>Hola, mi nombre es Daniel Vasquez.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolore
              velit commodi suscipit rerum sunt maxime aliquam laborum odit,
              temporibus reprehenderit? Esse numquam commodi saepe quis
              accusamus.
            </p>
          </div>
        </div>
      </section>
      <section className="ProyectsContainer">
        <div className="grid-container">
          <h3>Proyectos</h3>
          <div className="projects-main-container">
            <ProfileCardProject title="Instagram" />
            <ProfileCardProject title="Badges" />
            <ProfileCardProject title="Maquetacíon" />
          </div>
        </div>
      </section>
      <Contacts />
    </div>
  );
}

export default Profile;
