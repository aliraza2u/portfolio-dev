import React from 'react';
import Slider from "react-slick";
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";

const Index = () => {
    return (
        <div>
            
            <h2>jkl;</h2>
            <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
         
        </Slider>
        </div>
    );
};

export default Index;




const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };