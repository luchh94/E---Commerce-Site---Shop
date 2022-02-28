import React, { useState, useEffect } from "react";
import {
  Container,
  Title,
  Products,
  ProductHeader,
  UnderLine,
  CameraHeader,
} from "./Camera.styles";
import Card from "../../../Ui/Card";

import axios from "axios";

const Camera = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get("/api/products/");
      const filteredData = data.filter((e) => e.category === "Camera");
      setProducts(filteredData);
    };
    getData();
  }, []);

  return (
    <Container id="camera">
      <Title>
        <ProductHeader>
          <CameraHeader src="./assets/Tech42Day/ProductHeaders/CamerasHeader.png" />
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

export default Camera;
