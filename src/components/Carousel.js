// Carousel.js

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from "../image/slide1.jpg"
import slide2 from "../image/slide2.jpg"
import slide3 from "../image/slide3.jpg"
import slide4 from "../image/slide4.jpg"
import slide5 from "../image/slide5.jpg"

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3100,
  };

  return (
    <div style={{ width: "90%", margin: "0 auto" }}>
      <Slider {...settings}>
        <div>
          <img
            src={ slide1 }
            alt="Slide 1"
            style={{ width: "100%" }}
          />
        </div>
        <div>
          <img
            src={ slide2 }
            alt="Slide 2"
            style={{ width: "100%" }}
          />
        </div>
        <div>
          <img
            src={ slide3 }
            alt="Slide 3"
            style={{ width: "100%" }}
          />
        </div>
        <div>
          <img
            src={slide4}
            alt="Slide 4"
            style={{ width: "100%" }}
          />
        </div>
        <div>
          <img
            src={ slide5 }
            alt="Slide 5"
            style={{ width: "100%" }}
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
