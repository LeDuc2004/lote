import React from "react";
import { Link, useParams } from "react-router-dom";
import CarouselCustom from "./Carousel";
import CustomFooter from "./Footer";
import HomePage from "../pages/HomePage";
import CustomHeader from "./Header";
import DrinksPage from "../pages/DrinksPage";
import FastFood from "../pages/FastfoodPage";
import Admin from "../admin/Admin";

const Body = () => {
  const path = window.location.pathname;
  return (
    <>
      {!path.includes("/admin") && <CustomHeader />}

      {path.includes("/drinks") ? (
        <DrinksPage />
      ) : path.includes("/fastfood") ? (
        <FastFood />
      ) : path.includes("/admin") ? (
        <Admin />
      ) : (
        <>
          <CarouselCustom />
          <HomePage />
        </>
      )}
      {!path.includes("/admin") && <CustomFooter />}
    </>
  );
};

export default Body;
