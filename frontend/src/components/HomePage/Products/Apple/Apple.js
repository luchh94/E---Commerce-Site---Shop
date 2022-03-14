import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../../../redux/actions/productActions";
import {
  Container,
  Title,
  Products,
  ProductHeader,
  UnderLine,
  AppleHeader,
} from "./Apple.styles";
import Card from "../../../Ui/Card";
import Loading from "../../../Ui/Loading";

const Apple = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, products, error } = productList;

  const appleProducts = products.filter((e) => e.brand === "apple");

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <Container id="apple">
      <Title>
        <ProductHeader>
          <AppleHeader src="./assets/Tech42Day/ProductHeaders/AppleHeader.png" />
          <UnderLine src="./images/underline.png" />
        </ProductHeader>
      </Title>
      <Products>
        {loading ? (
          <Loading />
        ) : error ? (
          <h3>{error}</h3>
        ) : (
          appleProducts.map((product) => (
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

export default Apple;
