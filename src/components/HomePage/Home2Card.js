import React from "react";
import "./Home2Card.css";

export const Home2Card = (props) => {
  return (
    <div className="container">
      <img src={props.src} alt="Avatar" className="image" />
      <div className="overlay">
        <h5 className="text">{props.name}</h5>
        <span> {props.qt} </span>
      </div>
    </div>
  );
};
