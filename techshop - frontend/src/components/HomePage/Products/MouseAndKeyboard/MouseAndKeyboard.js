import React from "react";
import Card from "../../../Ui/Card";
import {
  Container,
  Title,
  Products,
  ProductHeader,
  UnderLine,
  MouseAndKeyboardHeader,
} from "./MouseAndKeyboard.styles";
import mouseAndKeyboards from "./MouseAndKeyboardProducts";

const MouseAndKeyboard = () => {
  return (
    <Container id="mouseandkeyboard">
      <Title>
        <ProductHeader>
          <MouseAndKeyboardHeader src="./assets/Tech42Day/ProductHeaders/mouseandkeyboards.png" />
          <UnderLine src="./images/underline.png" />
        </ProductHeader>
      </Title>
      <Products>
        {mouseAndKeyboards.map((product) => (
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

export default MouseAndKeyboard;
