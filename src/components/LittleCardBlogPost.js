import React from "react";
import { Link } from "react-router-dom";
import "./styles/LittleCardBlogPost.css";
import BlogData from "../api";

// function LittleCardBlogPost(props) {
//   return (
//     <React.Fragment>
//       {props.apiBlogs.map((blog) => {
//         return (
//           <article key={blog.id} className="CarTittleContainer">
//             <img className="CarTittleContainer-img" src={blog.image} alt="" />
//             <p className="CarTittleContainer-title">{blog.title}</p>
//             <p className="CarTittleContainer-description">{blog.description}</p>
//             <Link className="CarTittleContainer-link" to={`/blog/${blog.id}`}>
//               Leer más
//             </Link>
//           </article>
//         );
//       })}
//     </React.Fragment>
//   );
// }

class LittleCardBlogPost extends React.Component {
  constructor() {
    super();

    this.state = { BlogData };
  }

  render() {
    return (
      <React.Fragment>
        {this.state.BlogData.map((blog) => {
          return (
            <article key={blog.id} className="CarTittleContainer">
              <Link to={`/blog/${blog.id}`}>
                <img
                  className="CarTittleContainer-img"
                  src={blog.image}
                  alt=""
                />
              </Link>
              <p className="CarTittleContainer-title">{blog.title}</p>
              <p className="CarTittleContainer-description">
                {blog.description}
              </p>
              <Link className="CarTittleContainer-link" to={`/blog/${blog.id}`}>
                Leer más
              </Link>
            </article>
          );
        })}
      </React.Fragment>
    );
  }
}

export default LittleCardBlogPost;
