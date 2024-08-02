import React from "react";
import "./Slide.scss";
import Slider from "react-slick"; // Updated import

// Slider settings
const settings = (slidesToShow, arrowsScroll) => ({
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: slidesToShow,
  slidesToScroll: arrowsScroll,
});

const Slide = ({ children, slidesToShow, arrowsScroll }) => {
  return (
    <div className="slide">
      <div className="container">
        <Slider {...settings(slidesToShow, arrowsScroll)}>
          {children}
        </Slider>
      </div>
    </div>
  );
};

export default Slide;
