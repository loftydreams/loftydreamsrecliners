import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const CarouselContainer = () => {
  return (
    <Carousel pause={false} controls={false}>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/originals/28/92/63/28926332d944be8999dc628ada39e4f7.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h2 style={{color:"black"}}  > <strong>  </strong> </h2>
          <h4 style={{color:"black"}}> </h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100"
          src="https://ec2b-css.microdinc.com/css/1972/customercontent/uploads/recliners-motion-furniture.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
        <h3 style={{color:"black"}}>   <strong>   </strong>   </h3>
          <h4 style={{color:"black"}}>                   </h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100"
          src="https://images.all-free-download.com/images/graphicthumb/fashion_sofa_hd_picture_167714.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          
          <h2 style={{color:"black"}}>    <strong>  </strong>   </h2>
          <h4 style={{color:"black"}}> </h4>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
  );
};

export default CarouselContainer;
