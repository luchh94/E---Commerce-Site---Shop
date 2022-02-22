import React from "react";

import { CardDiv, ShadowDetail, Name, Price, InfoIcon } from "./Card.styles";

import { Link } from "react-router-dom";
import Rating from "./RatingHomePage/Rating";

const Card = (props) => {
  return (
    <CardDiv>
      <Link to={`/product/${props.id}`}>
        <ShadowDetail>
          <InfoIcon />
          CLICK FOR MORE INFO
        </ShadowDetail>
      </Link>

      <img src={props.image} alt="/" />
      <Name>{props.name}</Name>
      <Rating rating={props.rating} color='red' />

      <Price>{`$${props.price}`}</Price>
    </CardDiv>
  );
};

export default Card;
