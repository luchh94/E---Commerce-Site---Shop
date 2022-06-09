import React from "react";
import { Container, LeftContainer, Button, Wrapper } from "./Herov2.styles";
import { useNavigate } from "react-router-dom";

const Herov2 = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Container>
        <LeftContainer>
          <h3>NEW</h3>
          <p>
            CHECK OUT THE NEW <br />
            <span>IPHONE 13</span>
          </p>
          <Button
            onClick={() => {
              navigate("/products/621903b0d59628ef1739547c");
            }}
          >
            More Info
          </Button>
        </LeftContainer>
        <div>
          <img src="./assets/Tech42Day/pictures/iphonehero.png" />
        </div>
      </Container>
    </Wrapper>
  );
};

export default Herov2;
