import React, { useState, useEffect } from "react";
import {
  Container,
  Title,
  Products,
  ProductHeader,
  UnderLine,
  AppleHeader,
} from "./Apple.styles";
import Card from "../../../Ui/Card";
import axios from "axios";

const Apple = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      const appleProducts = data.filter((e) => e.brand === "apple");
      console.log(appleProducts);
      setProducts(appleProducts);
    };
    fetchProducts();
  }, []);

  return (
    <Container id="apple">
      <Title>
        <ProductHeader>
          <AppleHeader src="./assets/Tech42Day/ProductHeaders/AppleHeader.png" />
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

export default Apple;
