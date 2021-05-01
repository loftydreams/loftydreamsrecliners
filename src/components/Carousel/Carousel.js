import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const CarouselContainer = () => {
  return (
    <Carousel fade={true} pause={false} controls={false}>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/originals/28/92/63/28926332d944be8999dc628ada39e4f7.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000} dots={false}>
        <img
          className="d-block w-100"
          src="https://www.royaloakindia.com/uploads/ROYIND-royaloak-recliner3S-mesure37.webp"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselContainer;
