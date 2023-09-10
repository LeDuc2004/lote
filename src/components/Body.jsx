import React from "react";
import { Link, useParams } from "react-router-dom";
import CarouselCustom from "./Carousel";
import CustomFooter from "./Footer";
import HomePage from "../pages/HomePage";
import CustomHeader from "./Header";
import DrinksPage from "../pages/DrinksPage";
import FastFood from "../pages/FastfoodPage";

const Body = () => {
  const path = window.location.pathname;
  return (
    <>
      <CustomHeader />
      {path.includes("/drinks") ? (
        <DrinksPage/>
      ) : path.includes("/fastfood") ? (
        <FastFood/>
      ) : (
        <>
          <CarouselCustom />
          <HomePage />
        </>
      )}

      <CustomFooter />
    </>
  );
};

export default Body;
