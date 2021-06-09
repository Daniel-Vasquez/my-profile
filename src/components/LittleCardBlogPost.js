import React from "react";
import { Link } from "react-router-dom";
import "./styles/LittleCardBlogPost.css";

function LittleCardBlogPost(props) {
  return (
    <React.Fragment>
      {props.apiBlogs.map((blog) => {
        return (
          <article key={blog.id} className="CarTittleContainer">
            <img className="CarTittleContainer-img" src={blog.image} alt="" />
            <p className="CarTittleContainer-paragraph">{blog.title}</p>
            <p>{blog.description}</p>
            <Link className="CarTittleContainer-link" to={`/blog/${blog.id}`}>
              Leer más
            </Link>
          </article>
        );
      })}
    </React.Fragment>
  );
}

export default LittleCardBlogPost;
