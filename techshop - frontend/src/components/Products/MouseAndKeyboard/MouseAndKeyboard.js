import React from "react";
import Card from '../../ui/Card'
import { Container,
    Title,
    Products,
    ProductHeader,
    UnderLine,
    MouseAndKeyboardHeader} from './MouseAndKeyboard.styles'
import mouseAndKeyboards from './MouseAndKeyboardProducts'

const MouseAndKeyboard = () => {
  return (
    <Container>
      <Title>
        <ProductHeader>
          <MouseAndKeyboardHeader src="./assets/Tech42Day/ProductHeaders/mouseandkeyboards.png" />
          <UnderLine src="./images/underline.png" />
        </ProductHeader>
      </Title>
      <Products>
        {mouseAndKeyboards.map((product) => (
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

export default MouseAndKeyboard;
