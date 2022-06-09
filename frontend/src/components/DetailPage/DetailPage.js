import React, { useEffect, useState } from "react";
import Rating from "../Ui/RatingDetailPage/RatingDetail";
import { useDispatch, useSelector } from "react-redux";
import { listProductDetail } from "../../redux/actions/productActions";
import { useNavigate, useParams } from "react-router-dom";
import { createReview } from "../../redux/actions/productActions";

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
  ProductContainer,
  ReviewContainer,
  ReviewDiv,
  ReviewCreateDiv,
  RatingP,
  Content,
} from "./DetailPage.styles";
import { PRODUCT_CREATEREVIEW_RESET } from "../../redux/constants/productConstants";
import Loading from "../Ui/Loading";

const DetailPage = (props) => {
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");
  const { id } = useParams();
  const history = useNavigate();
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetail);
  const { product } = productDetails;
  const { error, success, loading } = useSelector(
    (state) => state.productCreateReview
  );
  const { userInfo } = useSelector((state) => state.userLogin);

  useEffect(() => {
    dispatch(listProductDetail(props.id));
    if (success) {
      alert("Review Submitted!");
      setRating(0);
      setComment("");
      dispatch({ type: PRODUCT_CREATEREVIEW_RESET });
    }
  }, [dispatch, props.id, success]);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const arrayKeys = [...Array(product.countInStock).keys()];

  const addToCartHandler = () => {
    history(`/cart/${props.id}?${qty}`);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!userInfo) {
      alert("Please login to review a product!");
    } else {
      dispatch(createReview({ comment, rating }, id));
      if (error) {
        alert(error);
      }
    }

    console.log(id);
  };

  const ratingAftermath = Math.ceil(Number(product.rating));

  return (
    
    <Container>
      {loading && <Loading/>}
      <ProductContainer>
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
                {ratingAftermath} / {product.numReviews} Ratings
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
      </ProductContainer>
      <ReviewContainer>
        <h1>Reviews</h1>
        <ReviewDiv>
          {product.reviews.map((review) => (
            <div>
              <h3>{review.name}</h3>
              <RatingP>
                <Rating rating={review.rating} />
              </RatingP>
              <Content>
                <p>{review.comment}</p>
              </Content>
            </div>
          ))}
        </ReviewDiv>
        <ReviewCreateDiv>
          <h2>WRITE A CUSTOMER REVIEW</h2>
          <form onSubmit={submitHandler}>
            <select type="select" onChange={(e) => setRating(e.target.value)}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <textarea onChange={(e) => setComment(e.target.value)}></textarea>
            <button type="submit">Send Review</button>
          </form>
        </ReviewCreateDiv>
      </ReviewContainer>
    </Container>
  );
};

export default DetailPage;
