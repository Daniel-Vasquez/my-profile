import React from "react";
import CardBlogPost from "../components/CardBlogPost";
import LittleCardBlogPost from "../components/LittleCardBlogPost";
import Contacts from "../components/Contacts";
import "../components/styles/Blogs.css";
import BlogData from "../api";
class Blogs extends React.Component {
  constructor() {
    super();

    this.state = { BlogData };
  }

  render() {
    return (
      <React.Fragment>
        <CardBlogPost
          apiBlogs={this.state.BlogData}
          title="Badges"
          image="badges.png"
          description="CRUD application, to create, edit, modify and delete users."
          id="1"
          link="https://instagram-dani.vercel.app/"
        />
        <section className="blogs-posts-container">
          <div className="grid-container">
            <h3 className="blogs-posts-container__title">
              Proyectos destacados
            </h3>
            <div className="blogs-posts-container-card">
              <LittleCardBlogPost apiBlogs={this.state.BlogData} />
            </div>
          </div>
        </section>
        <Contacts />
      </React.Fragment>
    );
  }
}

export default Blogs;
