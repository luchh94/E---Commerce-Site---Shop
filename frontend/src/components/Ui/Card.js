import React from "react";

import {
  CardDiv,
  ShadowDetail,
  Name,
  Price,
  InfoIcon,
  ProductLink,
} from "./Card.styles";

import { Link, useNavigate } from "react-router-dom";
import Rating from "./RatingHomePage/Rating";

const Card = (props) => {
  const navigate = useNavigate();

  const navigateHandler = (e) => {
    navigate(`/products/${props.id}`);
  };
  return (
    <CardDiv onClick={navigateHandler}>
      <img src={props.image} alt="/" />

      <Name>{props.name}</Name>
      <Rating rating={props.rating} color="red" />

      <Price>{`$${props.price}`}</Price>
    </CardDiv>
  );
};

export default Card;
