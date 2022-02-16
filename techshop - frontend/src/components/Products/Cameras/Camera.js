import React from "react";
import {
  Container,
  Title,
  Products,
  ProductHeader,
  UnderLine,
  CameraHeader,
} from "./Camera.styles";
import Card from "../../ui/Card";
import cameraProducts from "./CameraProducts";

const Camera = () => {
  return (
    <Container>
      <Title>
        <ProductHeader>
          <CameraHeader src="./assets/Tech42Day/ProductHeaders/CamerasHeader.png" />
          <UnderLine src="./images/underline.png" />
        </ProductHeader>
      </Title>
      <Products>
        {cameraProducts.map((product) => (
          <Card
            image={product.image}
            name={product.name}
            rating={product.rating}
            price={product.price}
          />
        ))}
      </Products>
    </Container>
  );
};

export default Camera;
