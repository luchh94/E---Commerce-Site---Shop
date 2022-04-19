import styled from "styled-components";


export const Container = styled.div`
  width: 80%;
  height: 1500px;
  display: flex;
  flex-direction: column;
`;

export const ProductContainer = styled.div`
  width: 100%;
  height: 750px;
  display: flex; ;
`;

export const LeftContainer = styled.div`
  width: 50%;

  height: 750px;
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    max-width: 400px;
    height: auto;
  }
`;

export const RightContainer = styled.div`
  width: 50%;

  height: 750px;

  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const CatAndContent = styled.div`
  display: flex;
  margin: 0 0;
  margin-left: 100px;
  flex-direction: column;

  > button {
    margin: 0 0;
    width: 130px;
    height: 40px;
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
    font-size: 45px;
    align-items: flex-start;
    font-family: "Source Sans 3", sans-serif;
    font-weight: normal;
  }
`;
export const PriceAndRating = styled.div`
  width: 100%;
  margin-top: 50px;
  display: flex;
  margin: 0 0;

  margin-top: 30px;

  > p {
    margin-left: 100px;
    font-size: 50px;
    align-items: flex-start;
  }
`;

export const Description = styled.p`
  margin: 0 0;
  font-size: 16px;
  margin-left: 100px;
  margin-right: 120px;
  margin-top: 70px;
  opacity: 50%;
  font-family: "Source Sans 3", sans-serif;
`;

export const RatingContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;
  margin-left: 57px;
  > p {
    margin: 0 0;
  }
`;

export const CartButton = styled.button`
  height: 70px;
  width: 180px;
  margin: 0 0;
  margin-left: 100px;
  margin-top: 70px;
  font-weight: bold;
`;

export const InStock = styled.div`
  display: flex;
  width: 300px;
  height: 200;
  margin: 0 0;
  margin-left: 100px;
  margin-top: 30px;
  align-items: center;
  justify-content: center;
  > p {
    margin-left: 10px;
    font-size: 25px;
  }
  > form {
    width: 200px;
    height: 200px;
  }
  > select {
    width: 60px;
    height: 40px;
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
