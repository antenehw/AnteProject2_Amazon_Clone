import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import modularcss from "./Carousel.module.css";
import { img } from "../../img/data";

function CarouselEffect() {
  return (
   <div className={modularcss.hero__img} >
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        interval={3000}
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
        stopOnHover
        swipeable
      >
        {img.map((image, index) => (
          <div key={index}>      
            <img src={image} alt={`slide-${index}`} />
            </div>
        ))}
      </Carousel>
      
    </div>
  );
}

export default CarouselEffect;