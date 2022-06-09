import Apple from "../components/HomePage/Products/Apple/Apple";
import Cameras from "../components/HomePage/Products/Cameras/Camera";
import MouseAndKeyboard from "../components/HomePage/Products/MouseAndKeyboard/MouseAndKeyboard";
import ContactUs from "../components/HomePage/ContactUs/ContactUs";
import Outro from "../components/Outro/Outro";
import Meta from "../components/Meta";

import React from "react";
import { Fragment } from "react";
import Headerv2 from "../components/HomePage/Header/Headerv2";
import Herov2 from "../components/HomePage/Hero/Herov2";
import About from "../components/HomePage/About/About";

const HomePage = () => {
  return (
    <Fragment>
      <Meta />
      <Headerv2 />
      <Herov2 />
      <About />
      <Apple />
      <Cameras />
      <MouseAndKeyboard />
      <ContactUs />
      <Outro />
    </Fragment>
  );
};

export default HomePage;
