import React from "react";

import { StarContainer, FullStars, EmptyStars, Star } from "./Rating.styles";

const Rating = (props) => {
  const rating = props.rating;
  let emptyArray = [];

  const starRating = () => {
    if (rating <= 1) {
      emptyArray = [...Array(0)];
    }
    if (rating <= 1.5 && rating >= 1) {
      emptyArray = [...Array(1)];
    }
    if (rating <= 2 && rating >= 1.5) {
      emptyArray = [...Array(2)];
    }
    if (rating <= 2.5 && rating >= 2) {
      emptyArray = [...Array(2)];
    }
    if (rating <= 3 && rating >= 2.5) {
      emptyArray = [...Array(3)];
    }
    if (rating <= 3.5 && rating >= 3) {
      emptyArray = [...Array(3)];
    }
    if (rating <= 4 && rating >= 3.5) {
      emptyArray = [...Array(4)];
    }
    if (rating <= 4.5 && rating >= 4) {
      emptyArray = [...Array(4)];
    }

    if (rating <= 5 && rating >= 4.5) {
      emptyArray = [...Array(5)];
    }
    return emptyArray;
  };

  return (
    <StarContainer>
      <FullStars>
        {starRating().map((element) => (
          <Star />
        ))}
      </FullStars>
      <EmptyStars>
        {[...Array(5)].map((element) => (
          <Star />
        ))}
      </EmptyStars>
    </StarContainer>
  );
};

export default Rating;
