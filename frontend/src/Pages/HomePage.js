import Header from "../components/HomePage/Header/Header";
import Hero from "../components/HomePage/Hero/Hero";
import Apple from "../components/HomePage/Products/Apple/Apple";
import Cameras from "../components/HomePage/Products/Cameras/Camera";
import MouseAndKeyboard from "../components/HomePage/Products/MouseAndKeyboard/MouseAndKeyboard";
import ContactUs from "../components/HomePage/ContactUs/ContactUs";
import Outro from "../components/Outro/Outro";
import Meta from "../components/Meta";

import React from "react";
import { Fragment } from "react";

const HomePage = () => {
  return (
    <Fragment>
      <Meta />
      <Header />
      <Hero />
      <Apple />
      <Cameras />
      <MouseAndKeyboard />
      <ContactUs />
      <Outro />
    </Fragment>
  );
};

export default HomePage;
