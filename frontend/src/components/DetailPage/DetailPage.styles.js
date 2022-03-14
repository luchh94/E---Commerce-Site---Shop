import styled from "styled-components";

export const Container = styled.div`
  width: 1440px;
  height: 750px;
  display: flex;
`;

export const LeftContainer = styled.div`
  width: 720px;
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    width: 400px;
    height: auto;
  }
`;

export const RightContainer = styled.div`
  width: 720px;
  height: auto;
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
  margin-top: 50px;
  display: flex;
  margin: 0 0;
  margin-left: 100px;
  margin-top: 30px;

  > p {
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
  margin-top: 10px;
  > p {
    margin-left: 57px;
    margin-top: 10px;
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
  margin: 0 0;
  margin-left: 100px;
  margin-top: 30px;
align-items: center;
  > p {
    margin-left: 10px;
    font-size: 25px;
  }
  > form {
    width: 60px;
    height: 30px;

    > select {
      width: 70px;
      height: 35px;
    }
  }

`;
