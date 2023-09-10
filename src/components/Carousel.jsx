import React from "react";
import { Carousel } from "@mantine/carousel";
import { Image } from "@mantine/core";
import { IMGCAROSEL } from "../context/contain";

const CarouselCustom = () => {
  return (
    <Carousel w={"100%"} loop withIndicators height={400}>
      {IMGCAROSEL.map(({ img, title }) => (
        <Carousel.Slide>
           <img style={{width:"100%",height:"100%"}} src={img} alt="" />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};

export default CarouselCustom;
