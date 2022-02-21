import React from "react";
import {
  Container,
  Title,
  Products,
  ProductHeader,
  UnderLine,
  CameraHeader,
} from "./Camera.styles";
import Card from "../../../Ui/Card";
import cameraProducts from "./CameraProducts";

const Camera = () => {
  return (
    <Container id="camera">
      <Title>
        <ProductHeader>
          <CameraHeader src="./assets/Tech42Day/ProductHeaders/CamerasHeader.png" />
          <UnderLine src="./images/underline.png" />
        </ProductHeader>
      </Title>
      <Products>
        {cameraProducts.map((product) => (
          <Card
            key={product.id}
            image={product.image}
            name={product.name}
            rating={product.rating}
            price={product.price}
            id={product.id}
          />
        ))}
      </Products>
    </Container>
  );
};

export default Camera;
