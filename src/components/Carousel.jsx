import React from "react";
import { Carousel } from "@mantine/carousel";
import { Image } from "@mantine/core";
import { IMGCAROSEL } from "../context/contain";

const CarouselCustom = () => {
  return (
    <Carousel w={"100%"} loop withIndicators height={350}>
      {IMGCAROSEL.map(({ img, title }) => (
        <Carousel.Slide>
          <Image
            mah={"100%"}
            p={10}
            src={img}
            alt={title}
            fit="fill"
          />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};

export default CarouselCustom;
