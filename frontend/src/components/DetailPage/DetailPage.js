import React, { useState, useEffect } from "react";
import axios from "axios";
import Rating from "../Ui/RatingDetailPage/RatingDetail";

import {
  Container,
  LeftContainer,
  RightContainer,
  CatAndContent,
  PriceAndRating,
  Description,
  CartButton,
  RatingContainer,
} from "./DetailPage.styles";

const DetailPage = ( props) => {
  const [product, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(`/api/product/${props.id}`);

      setProducts(data);
    };
    getData();
  }, []);


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
            <p>
              {product.rating} / {product.numReviews} Ratings
            </p>
          </RatingContainer>
        </PriceAndRating>
        <Description>{product.description}</Description>
        <CartButton>ADD TO CART</CartButton>
      </RightContainer>
    </Container>
  );
};

export default DetailPage;
