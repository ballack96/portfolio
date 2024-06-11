import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [
    "https://source.unsplash.com/random/800x600",
    "https://source.unsplash.com/random/800x601",
    "https://source.unsplash.com/random/800x602"
  ];

  return (
    <div style={{ margin: '1%' }}>
      <Slider {...settings}>
        {images.map((url, index) => (
          <div key={index}>
            <img src={url} alt={`Slide ${index + 1}`} style={{ width: '100%', height: 'auto' }} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;