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
              <span>Tech For Today</span> is a local business based in Hamburg,
              Germany. We provide new technology for a fair price to make it
              accessible for everyone.
            </p>
          </div>
          <div>How do we achieve that?</div>
          <div>
            <p>
              We purcahse products that are taken out of stock because of
              packaging issues and can therefore buy it for a significantly
              lower price and resell it to customers who are looking for
              affordable options.
            </p>
          </div>
        </TextDiv>
      </Grid>
    </Container>
  );
};

export default About;
