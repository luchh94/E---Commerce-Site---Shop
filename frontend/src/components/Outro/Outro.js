import React from "react";
import { Container, InstagramIcon, FacebookIcon } from "./Outro.styles";

const Outro = () => {
  return (
    <Container>
      <div>
        <ul>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>FAQ's</li>
          <li>Return Policy</li>
          <li>Shipping and Process</li>
        </ul>
        <ul>
          <li>Terms of Sale</li>
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
        </ul>
        <div>
          <FacebookIcon />

          <InstagramIcon />
        </div>
      </div>
    </Container>
  );
};

export default Outro;
