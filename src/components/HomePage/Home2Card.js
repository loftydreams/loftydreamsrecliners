import React from 'react'
import "./Home2Card.css";
export const Home2Card = (props) => {
    return (
        <div class="container">
  <img src={props.src} alt="Avatar" class="image" />
  <div class="overlay">
    <h5 class="text">Living Room Recliner</h5>
    <span>13 PRODUCTS</span> 
  </div>
</div>

    )
}
