import React from "react";
import { Link } from "react-router-dom";
// import logoBlogPost from "../images/lorenzo-herrera.jpg";
import "./styles/CardBlogPost.css";

function CardBlogPost(props) {
  return (
    <section className="blogContainer">
      <div className="blogContainer-blogs grid-container">
        <h3 className="blogContainer-blogs__title">{props.title}</h3>

        <div className="blogContainer-coverPage">
          <Link
            className="blogContainer-info__link"
            to={{ pathname: props.link }}
            target="_blank"
          >
            <img
              className="blogContainer-coverPage__img"
              src={props.image}
              alt="Logo Post"
            />
          </Link>
        </div>

        <div className="blogContainer-info">
          <h2 className="blogContainer-info__title">{props.title}</h2>
          <p className="blogContainer-info__paragraph">{props.description}</p>
          <Link
            className="blogContainer-info__link"
            to={{ pathname: props.link }}
            target="_blank"
          >
            Saber más...
          </Link>
        </div>
      </div>
    </section>
  );
}

// class CardBlogPost extends React.Component {
//   constructor() {
//     super();

//     this.state = {};
//   }

//   componentDidMount() {}

//   render() {
//     return (
//       <section className="blogContainer">
//         <div className="blogContainer-blogs grid-container">
//           <h3 className="blogContainer-blogs__title">Soy un título</h3>

//           <div className="blogContainer-coverPage">
//             <img
//               className="blogContainer-coverPage__img"
//               src={logoBlogPost}
//               alt="Logo Post"
//             />
//           </div>

//           <div className="blogContainer-info">
//             <h2 className="blogContainer-info__title">
//               Título <br /> del blogpost
//             </h2>
//             <p className="blogContainer-info__paragraph">
//               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
//               vero veniam officiis? Error magnam numquam.
//             </p>
//             <Link className="blogContainer-info__link" to="/">
//               Leer más
//             </Link>
//           </div>
//         </div>
//       </section>
//     );
//   }
// }

export default CardBlogPost;
