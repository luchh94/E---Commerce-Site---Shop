import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../../../Ui/Card";
import {
  Container,
  Title,
  Products,
  ProductHeader,
  UnderLine,
  MouseAndKeyboardHeader,
} from "./MouseAndKeyboard.styles";

const MouseAndKeyboard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get("/api/products/");
      const filteredData = data.filter(
        (e) => e.category === "keyboard" || e.category === "mouse"
      );
      setProducts(filteredData);
    };

    getData();
  }, []);

  return (
    <Container id="mouseandkeyboard">
      <Title>
        <ProductHeader>
          <MouseAndKeyboardHeader src="./assets/Tech42Day/ProductHeaders/mouseandkeyboards.png" />
          <UnderLine src="./images/underline.png" />
        </ProductHeader>
      </Title>
      <Products>
        {products.map((product) => (
          <Card
            key={product.id}
            image={product.image}
            name={product.name}
            rating={product.rating}
            price={product.price}
            id={product._id}
          />
        ))}
      </Products>
    </Container>
  );
};

export default MouseAndKeyboard;
