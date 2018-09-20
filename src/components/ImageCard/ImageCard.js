import React from "react";
import "./ImageCard.css";

const ImageCard = props => (
  <div className="card">
      <img class="card-img" alt={props.name} src={props.image} />
  </div>
);

export default ImageCard;
