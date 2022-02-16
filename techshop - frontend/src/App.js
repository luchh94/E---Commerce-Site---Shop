import Header from "./components/Header/Header";
import { Fragment } from "react";
import GlobalStyle from "./GlobalStyle";
import Hero from "./components/Hero/Hero";
import Apple from "./components/Products/Apple/Apple";
import Cameras from "./components/Products/Cameras/Camera";
import MouseAndKeyboards from "./components/Products/MouseAndKeyboard/MouseAndKeyboard";
import ContactUs from "./components/ContactUs/ContactUs";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <GlobalStyle />

      <Header />
      <Hero />
      <Apple />
      <Cameras />
      <MouseAndKeyboards />
      <ContactUs />
    </Router>
  );
}

export default App;
