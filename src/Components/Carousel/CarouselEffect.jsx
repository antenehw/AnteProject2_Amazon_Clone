import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import modularcss from "./Carousel.module.css";
import { img } from "../../img/data";

function CarouselEffect() {
  return (
    <div className={modularcss.carousel_container}>
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
      >
        {img.map((item, index) => (
          <div key={index}>
            <img src={item} alt={`slide-${index}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselEffect;
