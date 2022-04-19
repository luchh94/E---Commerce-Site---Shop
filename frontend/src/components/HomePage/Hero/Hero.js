import React from "react";
import {
  TextPart,
  Text,
  Container,
  EmptyContainer,
  Highlight,
  Bullseye,
  ButtonContainer,
  ButtonAnchor,
} from "./Hero.styles";
import { HashLink } from "react-router-hash-link";

const Hero = () => {
  return (
    <Container>
      <TextPart>
        <Text>
          A small <Highlight>Tech - Shop</Highlight> based in <br />{" "}
          <Highlight>Hamburg, Germany</Highlight>
        </Text>
        <Bullseye src="./assets/Tech42Day/Icons/bullseye.png" />
        <Text>
          We buy <Highlight>quality</Highlight> Tech <br /> to sell it for a{" "}
          <br />
          <Highlight>fair Price</Highlight>
        </Text>
        <ButtonContainer>
          <HashLink to="/#contact" smooth={true}>
            <ButtonAnchor>FIND US</ButtonAnchor>
          </HashLink>
        </ButtonContainer>
      </TextPart>

      <EmptyContainer />
    </Container>
  );
};

export default Hero;
