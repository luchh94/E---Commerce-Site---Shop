import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../../../redux/actions/productActions";
import {
  Container,
  Title,
  Products,
  ProductHeader,
  UnderLine,
  CameraHeader,
} from "./Camera.styles";
import Card from "../../../Ui/Card";
import Loading from "../../../Ui/Loading";

const Camera = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { products, error, loading } = productList;

  const filteredProducts = products.filter((e) => e.category === "Camera");

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <Container id="camera">
      <Title>
        <ProductHeader>
          <CameraHeader src="./assets/Tech42Day/ProductHeaders/CamerasHeader.png" />
          <UnderLine src="./images/underline.png" />
        </ProductHeader>
      </Title>
      <Products>
        {loading ? (
          <Loading />
        ) : error ? (
          error.message
        ) : (
          filteredProducts.map((product) => (
            <Card
              key={product.id}
              image={product.image}
              name={product.name}
              rating={product.rating}
              price={product.price}
              id={product._id}
            />
          ))
        )}
      </Products>
    </Container>
  );
};

export default Camera;
