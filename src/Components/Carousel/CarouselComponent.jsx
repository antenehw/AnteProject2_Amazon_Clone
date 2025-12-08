import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import modularcss from "./Carousel.module.css";
import { img } from "./img/data";   // use imported data

function CarouselComponent() {
  return (
    <div className={modularcss.carouselContainer}>
      <Carousel
        autoPlay
        infiniteLoop
        interval={3000}
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
        stopOnHover={false}
        swipeable={true}
      >
        {img.map((imageItemLink, index) => (
          <div className={modularcss.hero__img} key={index}>
            <img src={imageItemLink} alt={`slide-${index}`} />
          </div>
        ))}
      </Carousel>

      
    </div>
  );
}

export default CarouselComponent;
