import React from "react";
import "./Header.css";

const Header = props => (
  <div className="header">
    <h1>{props.title}</h1>
    <h2>{props.instructions}</h2>
  </div>
);
export default Header;
