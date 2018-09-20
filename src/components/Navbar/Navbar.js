import React from "react";
import "./Navbar.css";

const Navbar = props => (

  <nav class="navbar navbar-expand-lg">
    <a class="navbar-brand" href="#">{props.title}</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">Your Guess Status
        </li>
        <li class="nav-item">Score
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
