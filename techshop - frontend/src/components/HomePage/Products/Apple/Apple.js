import React from "react";
import {
  Container,
  Title,
  Products,
  ProductHeader,
  UnderLine,
  AppleHeader,
} from "./Apple.styles";
import Card from "../../../Ui/Card";
import appleProducts from "./appleProducts";

const Apple = () => {
  return (
    <Container id="apple">
      <Title>
        <ProductHeader>
          <AppleHeader src="./assets/Tech42Day/ProductHeaders/AppleHeader.png" />
          <UnderLine src="./images/underline.png" />
        </ProductHeader>
      </Title>
      <Products>
        {appleProducts.map((product) => (
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

export default Apple;
