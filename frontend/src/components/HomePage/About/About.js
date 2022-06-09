import React, { useState } from "react";

import {
  Container,
  Grid,
  Pic1,
  Pic2,
  Pic3,
  Pic4,
  TextDiv,
} from "./About.styled";

const About = () => {
  const [showPicture1, setShowPicture1] = useState("none");
  const [showPicture2, setShowPicture2] = useState("none");
  const [showPicture3, setShowPicture3] = useState("none");
  const [showPicture4, setShowPicture4] = useState("none");
  const [showDiv, setShowDiv] = useState("none");

  window.addEventListener("scroll", (e) => {
    e.preventDefault();
    if (window.pageYOffset >= 200) {
      setShowPicture1("flex");
    }

    if (window.pageYOffset >= 350) {
      setShowPicture2("flex");
    }

    if (window.pageYOffset >= 450) {
      setShowPicture3("flex");
    }

    if (window.pageYOffset >= 550) {
      setShowPicture4("flex");
    }

    if (window.pageYOffset >= 3000) {
      setShowDiv("flex");
    }
  });

  return (
    <Container id="about">
      <Grid>
        <Pic4 showPicture4={showPicture4}></Pic4>
        <Pic1 showPicture1={showPicture1}></Pic1>
        <Pic3 showPicture3={showPicture3}></Pic3>
        <Pic2 showPicture2={showPicture2}></Pic2>
        <div>
          <h1>
            <span>ABOUT</span> US
          </h1>
        </div>
        <TextDiv showDiv={showDiv}>
          <div>
            <p>
              <span>Tech For Today</span> is a small Buisness based in Hamburg -
              Germany. We provide new Technoligy for a fair price to make it
              accesable for every Person
            </p>
          </div>
          <div>How we achieve that?</div>
          <div>
            <p>
              We buy products that would have gotten sorted out because of
              Package Problems. We buy it for a lower price so we can sell it to
              customers who cannot pay that much.
            </p>
          </div>
        </TextDiv>
      </Grid>
    </Container>
  );
};

export default About;
