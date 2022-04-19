import React, { useEffect } from "react";
import { Container } from "./SearchPageComponents.styles";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../redux/actions/productActions";
import Loading from "../Ui/Loading";
import Card from "../Ui/Card";

const SearchPageComponents = () => {
  const { products, loading } = useSelector((state) => state.productList);
  const { keyword } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts(keyword));

  }, [dispatch, keyword]);

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        products.map((product) => (
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
    </Container>
  );
};

export default SearchPageComponents;
