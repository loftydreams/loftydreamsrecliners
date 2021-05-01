import React from 'react';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';


export default class ProductCarousel extends React.Component {
    constructor() {
      super()
      this.state = {
        value: 0,
        slides: [
          (<img src={""} />),
          (<img src={""} />),
          (<img src={""} />),
        ],
        thumbnails: [
          (<img src={""} />),
          (<img src={""} />),
          (<img src={""} />),
        ],
      }
      this.onchange = this.onchange.bind(this);
    }
  
  
    onchange(value) {
      this.setState({ value });
    }
  
    render() {
      return (
      <div>
        <Carousel
          value={this.state.value}
          slides={this.state.slides}
          onChange={this.onchange}
        />
        <Dots number={this.state.thumbnails.length} thumbnails={this.state.thumbnails} value={this.state.value} onChange={this.onchange} number={this.state.slides.length} />
      </div>
      );
    }
  }