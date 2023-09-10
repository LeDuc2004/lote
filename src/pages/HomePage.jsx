import { Container, Text } from "@mantine/core";
import React, { useEffect } from "react";
import { Carousel } from "@mantine/carousel";
import CustomCard from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchBestSeller } from "../store/createTable";

const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBestSeller());
  }, []);
  const listdata = useSelector((state) => state);
  return (
    <Container size="70rem" my={40}>
      <Text fz={25} fw={700} ml={5} mb={5}>
        ƯU ĐÃI ĐẶC BIỆT
      </Text>
      <Carousel
        slideSize="33.333333%"
        slideGap="xs"
        slidesToScroll={3}
        withControls={false}
      >
        {listdata.listTable.status == "idle"
          ? listdata?.listTable?.bestSeller.map((item,index) => (
              <Carousel.Slide key={index}>
                <CustomCard item={item}/>
              </Carousel.Slide>
            ))
          : ""}
      </Carousel>
    </Container>
  );
};

export default HomePage;
