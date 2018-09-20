import React from "react";
import "./Navbar.css";

const Navbar = props => (

  <nav className="navbar">
    <a className="navbar-brand" href="#">
      {/* <img src="" width="30" height="30" class="d-inline-block align-top" alt=""> */}
      {props.title}
    </a>
    <span className="float-right">
      {!props.status ? "Excellent Memory!" : "Game Over!"}
    </span>
    <span className="float-right">
      Score: {props.score} | Top Score: {props.topScore}
    </span>
  </nav>
);

export default Navbar;
