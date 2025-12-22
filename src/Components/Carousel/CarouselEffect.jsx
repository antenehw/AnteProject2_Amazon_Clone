import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import modularcss from "./Carousel.module.css";
<<<<<<< HEAD
import { img } from "../../img/data";
=======
import { img } from "../Carousel/img/data";
>>>>>>> 56dbabc0c2672523e0771b2c4b5ecc1b5084f774

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
<<<<<<< HEAD
          <div key={index}>      
=======
          <div Key={index}>      
>>>>>>> 56dbabc0c2672523e0771b2c4b5ecc1b5084f774
            <img src={image} alt={`slide-${index}`} />
            </div>
        ))}
      </Carousel>
      
    </div>
  );
}

export default CarouselEffect;