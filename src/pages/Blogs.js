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
      <div>
        <CardBlogPost apiBlogs={this.state.BlogData} />
        <section className="blogs-posts-container">
          <div className="grid-container">
            <h3>Últimos blogposts</h3>
            <div className="blogs-posts-container-card">
              <LittleCardBlogPost apiBlogs={this.state.BlogData} />
            </div>
          </div>
        </section>
        <Contacts />
      </div>
    );
  }
}

export default Blogs;
