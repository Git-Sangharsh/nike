import React from 'react'
import './Slider.css'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../assets/slide-1.png';
import img2 from '../assets/slide-2.png';
import img3 from '../assets/slide-3.png';

const Slider = () => {
  return (
    <div className="Slider">
      <div className="slider-wrapper">
        <Carousel
          className="carousel-css"
          autoPlay={true}
          interval={2000}
          infiniteLoop={true}
          showArrows={true}
          showThumbs={false}
          showStatus={false}
        >
          <div className='car-img-inner-div'>
            <img src={img1} alt="" />
            <h1 className="shop-now">Coming Soon</h1>
          </div>
          <div className='car-img-inner-div'>
            <img src={img2} alt="" />
            <h1 className="shop-now">Coming Soon</h1>
          </div>
          <div className='car-img-inner-div'>
            <img src={img3} alt="" />
            <h1 className="shop-now">Coming Soon</h1>
          </div>
        </Carousel>
        <div className="slider-titles">
          <h1>Cushioning for Your Miles</h1>
          <h4>
            A lightweight Nike Zoom X midsole is combined with increased stack
            heights to <br />
            help provide cushioning during extended stretches of running.
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Slider;