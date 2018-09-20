import React from "react";
import "./Navbar.css";

const Navbar = props => (

  <nav className="navbar d-flex justify-content-between px-5">
    <span>{props.title}</span>
    <span>{props.msg}</span>  
    <span>Score: {props.score} | Top Score: {props.topScore}</span>
  </nav>
);

export default Navbar;