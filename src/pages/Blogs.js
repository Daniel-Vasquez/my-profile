import React from "react";
import CadBlogPost from "../components/CardBlogPost";
import LittleCardBlogPost from "../components/LittleCardBlogPost";
import Contacts from "../components/Contacts";
import "../components/styles/Blogs.css";

function Blogs() {
  return (
    <div>
      <CadBlogPost />
      <section className="blogs-posts-container">
        <div className="grid-container">
          <h3>Últimos blogposts</h3>
          <div className="blogs-posts-container-card">
            <LittleCardBlogPost title="Instagram" />
            <LittleCardBlogPost title="Badges" />
            <LittleCardBlogPost title="Platzi video" />
            <LittleCardBlogPost title="Maquetación" />
            <LittleCardBlogPost title="Responsive Design" />
          </div>
        </div>
      </section>
      <Contacts />
    </div>
  );
}

export default Blogs;
