import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

function CarouselComponent({ img }) {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={true}
        showThumbs={true}
        showStatus={false}
      >
        {img.map((imageItemLink, index) => (
          <div key={index}>
            <img src={imageItemLink} alt={`slide-${index}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
