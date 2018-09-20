import React from "react";
import "./ImageCard.css";

const ImageCard = props => (
  <div className="card">
      <img 
        onClick={() => props.selectImage(props.id)}
        className="card-img" 
        alt={props.name} 
        src={props.image} 
      />
  </div>
);

export default ImageCard;
