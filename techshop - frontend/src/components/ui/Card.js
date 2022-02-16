import React from "react";
import {
  CardDiv,
  Name,
  FullStars,
  EmptyStars,
  Price,
  StarContainer,
} from "./Card.styles";
import { FaStar } from "react-icons/fa";

const Card = (props) => {
  return (
    <CardDiv>
      <img src={props.image} alt="/" />
      <Name>{props.name}</Name>
      <StarContainer>
        <FullStars>
          {[...Array(5)].map((element) => (
            <FaStar />
          ))}
        </FullStars>
        <EmptyStars>
          {[...Array(5)].map((element) => (
            <FaStar />
          ))}
        </EmptyStars>
      </StarContainer>
      <Price>{props.price}</Price>
    </CardDiv>
  );
};

export default Card;
