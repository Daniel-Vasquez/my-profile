import React from "react";
import CardBlogPost from "../components/CardBlogPost";
import blogDate from "../api";

class Blog extends React.Component {
  constructor(props) {
    super(props);

    this.state = { blogDate };
  }

  render() {
    return (
      <div>
        <h1>Blog</h1>
        <CardBlogPost title="isbta" />
      </div>
    );
  }
}

export default Blog;
