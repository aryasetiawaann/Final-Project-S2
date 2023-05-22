import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/slideshow.css";
import Welcome from "./welcome";
import Recom from "./recomendation";

const Slideshow = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    ref: sliderRef,
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="slideshow-container">
      <Slider {...settings}>
        <div className="slide-items">
          <div className="welcome">
            <h2>selamat datang</h2>
            <p>MATARA, Kritik Film Indonesia Tiada Tara</p>
          </div>
        </div>
        <div className="slide-items">
          <Recom />
        </div>
      </Slider>
    </div>
  );
};

export default Slideshow;
