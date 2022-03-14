import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../../../redux/actions/productActions";
import React, { useEffect } from "react";
import Card from "../../../Ui/Card";
import {
  Container,
  Title,
  Products,
  ProductHeader,
  UnderLine,
  MouseAndKeyboardHeader,
} from "./MouseAndKeyboard.styles";
import Loading from "../../../Ui/Loading";

const MouseAndKeyboard = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  const filteredData = products.filter(
    (e) => e.category === "keyboard" || e.category === "mouse"
  );

  return (
    <Container id="mouseandkeyboard">
      <Title>
        <ProductHeader>
          <MouseAndKeyboardHeader src="./assets/Tech42Day/ProductHeaders/mouseandkeyboards.png" />
          <UnderLine src="./images/underline.png" />
        </ProductHeader>
      </Title>
      <Products>
        {loading ? (
          <Loading />
        ) : error ? (
          error.message
        ) : (
          filteredData.map((product) => (
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

export default MouseAndKeyboard;
