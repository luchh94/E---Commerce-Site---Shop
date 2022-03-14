import React, { useEffect, useState } from "react";
import Rating from "../Ui/RatingDetailPage/RatingDetail";
import { useDispatch, useSelector } from "react-redux";
import { listProductDetail } from "../../redux/actions/productActions";
import { useNavigate } from "react-router-dom";

import {
  Container,
  LeftContainer,
  RightContainer,
  CatAndContent,
  PriceAndRating,
  Description,
  CartButton,
  RatingContainer,
  InStock,
} from "./DetailPage.styles";

const DetailPage = (props) => {
  const history = useNavigate();
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetail);
  const { product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetail(props.id));
  }, [dispatch, props.id]);

  const arrayKeys = [...Array(product.countInStock).keys()];

  const addToCartHandler = () => {
    console.log("hello");
    history(`/cart/${props.id}?${qty}`);
    console.log(qty);
  };

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
        <InStock>
          <h2>In Stock: </h2>
          <p> {product.countInStock}</p>
          <select type="select" onChange={(e) => setQty(e.target.value)}>
            {arrayKeys.map((e) => (
              <option value={e + 1}>{e + 1}</option>
            ))}
          </select>
        </InStock>
        <CartButton onClick={addToCartHandler}>ADD TO CART</CartButton>
      </RightContainer>
    </Container>
  );
};

export default DetailPage;
