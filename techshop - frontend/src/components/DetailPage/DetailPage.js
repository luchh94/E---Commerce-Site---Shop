import React from "react";
import Rating from "../Ui/RatingDetailPage/RatingDetail";

import {
  Container,
  LeftContainer,
  RightContainer,
  CatAndContent,
  PriceAndRating,
  Description,
  CartButton,
  RatingContainer
} from "./DetailPage.styles";
import AllProducts from "../../AllProducts";

const DetailPage = (props) => {
  const products = AllProducts;
  let id = props.id;

  let product = products.find((e) => e.id == id);
  console.log(product);

  return (
    <Container>
      <LeftContainer>
        <img src={product.image} alt="#" />
      </LeftContainer>
      <RightContainer>
        <CatAndContent>
          <button>{product.category}</button>
          <p>{product.name}</p>
        </CatAndContent>
        <PriceAndRating>
          <p>${product.price}</p>
          <RatingContainer>
            <Rating rating={product.rating} detail />
            <p>{product.rating} / {product.numReviews} Ratings</p>
          </RatingContainer>
        </PriceAndRating>
        <Description>{product.description}</Description>
        <CartButton>ADD TO CART</CartButton>
      </RightContainer>
    </Container>
  );
};

export default DetailPage;
