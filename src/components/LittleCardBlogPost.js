import React from "react";
import { Link } from "react-router-dom";
import CarTittleLogo from "../images/post-1.png";
import "./styles/LittleCardBlogPost.css";

function LittleCardBlogPost(props) {
  return (
    <article className="CarTittleContainer">
      <img className="CarTittleContainer-img" src={CarTittleLogo} alt="" />
      <p className="CarTittleContainer-paragraph">{props.title}</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ut a
        fugiat soluta consequatur nisi sunt.
      </p>
      <Link className="CarTittleContainer-link" to="./">
        Leer más
      </Link>
    </article>
  );
}

export default LittleCardBlogPost;
