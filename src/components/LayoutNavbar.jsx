import React from "react";
import Navbar from "./Navbar.jsx";

function LayoutNavbar(props) {
  return (
    <React.Fragment>
      <Navbar />
      {props.children}
    </React.Fragment>
  );
}

export default LayoutNavbar;
