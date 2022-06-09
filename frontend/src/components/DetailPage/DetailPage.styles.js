import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  height: 200em;
  display: flex;
  flex-direction: column;
`;

export const ProductContainer = styled.div`
  width: 100%;
  height: 50em;
  display: flex;

  @media (max-width: 900px) {
    flex-direction: column;
    height: 100em;
  }
`;

export const LeftContainer = styled.div`
  width: 50%;

  height: 50em;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 900px) {
    width: 100%;
    height: 25em;
  }

  > img {
    max-width: 20em;
    height: auto;
  }
`;

export const RightContainer = styled.div`
  width: 50%;

  height: 50em;

  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 900px) {
    width: 100%;
    height: 40em;
  }
`;

export const CatAndContent = styled.div`
  display: flex;
  margin: 0 0;
  margin-left: 6em;
  flex-direction: column;

  > button {
    margin: 0 0;
    width: 10em;
    height: 3em;
    color: white;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 15px;
    font-weight: bold;
    background-color: #2b2d42;
    cursor: pointer;
    font-family: "Source Sans 3", sans-serif;
  }

  > p {
    font-size: 3em;
    align-items: flex-start;
    font-family: "Source Sans 3", sans-serif;
    font-weight: normal;
  }
`;
export const PriceAndRating = styled.div`
  width: 100%;
  margin-top: 2em;
  display: flex;
  margin: 0 0;

  margin-top: 30px;

  > p {
    margin-left: 2em;
    font-size: 3em;
    align-items: flex-start;
    text-align: center;

    @media (max-width: 1100px) {
      font-size: 2.5em;
    }
  }
`;

export const Description = styled.p`
  margin: 0 0;
  font-size: 1rem;
  margin-left: 6em;
  margin-right: 1.5em;
  margin-top: 2em;
  opacity: 50%;
  font-family: "Source Sans 3", sans-serif;
  text-align: left;
`;

export const RatingContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 0.5em;
  margin-left: 0.7em;
  > p {
    margin: 0 0;
  }
`;

export const CartButton = styled.button`
  height: 4em;
  width: 10em;
  margin: 0 0;
  margin-left: 7em;
  margin-top: 5em;
  font-weight: bold;
`;

export const InStock = styled.div`
  display: flex;
  width: 15em;

  margin: 0 0;
  margin-left: 5em;
  margin-top: 3em;
  align-items: center;
  justify-content: center;
  > p {
    margin-left: 0.1em;
    font-size: 1.5em;
  }
  > form {
    width: 20em;
    height: 20em;
  }
  > select {
    width: 5em;
    height: 2em;
  }
`;

export const ReviewContainer = styled.div`
  width: 60%;
  height: auto;
  display: flex;
  flex-direction: column;
  > h1 {
    margin-top: 50px;
    font-family: "Source Sans 3", sans-serif;
  }
`;

export const ReviewDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  margin-bottom: 15px;
  width: 100%;
  height: auto;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;

  > div {
    height: 200px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    overflow: hidden;
    text-overflow: ellipsis;

    > p {
      justify-content: center;
      margin: 0 0;
      font-size: 15px;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
`;

export const RatingP = styled.p`
  width: 100%;
  justify-content: center;
  display: flex;
`;

export const Content = styled.div`
  width: 70%;
  height: 60px;
  overflow: auto;
  justify-content: center;
  align-items: center;
`;

export const ReviewCreateDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 350px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;

  > h2 {
    font-family: "Source Sans 3", sans-serif;
  }
  > form {
    height: 250px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    > select {
      margin-bottom: 10px;
      width: 100px;
      height: 30px;
    }

    > textarea {
      width: 70%;
      resize: none;
      height: 100px;
    }

    > button {
      width: 150px;
      height: 40px;
    }
  }
`;
