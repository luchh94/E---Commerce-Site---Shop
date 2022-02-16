import React from "react";
import { Container, Title, Products, ProductHeader, UnderLine, AppleHeader } from "./Apple.styles";
import Card from "./../../ui/Card";
import appleProducts from "./appleProducts";


const Apple = () => {
  return (
    <Container>
      <Title>
        <ProductHeader>
          <AppleHeader src='./assets/Tech42Day/ProductHeaders/AppleHeader.png'/>
          <UnderLine src='./images/underline.png'/>
        </ProductHeader>
      </Title>
      <Products>
        {appleProducts.map((product) => (
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

export default Apple;
