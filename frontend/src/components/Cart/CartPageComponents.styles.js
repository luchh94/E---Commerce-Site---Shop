import styled from "styled-components";
import {
  RiDeleteBin2Line,
  RiInformationLine,
  RiShoppingBasketLine,
} from "react-icons/ri";

export const Title = styled.div`
  width: 1440px;
  height: 100px;
  margin-top: 50px;
  margin-bottom: 70px;

  text-align: center;

  > h1 {
    font-family: "Source Sans 3", sans-serif;
    font-weight: normal;
  }
`;

export const CartSymbol = styled(RiShoppingBasketLine)`
  height: 50px;
  width: auto;
`;

export const Container = styled.div`
  width: 1440px;
  height: 800px;
  display: flex;
`;

export const ContainerLeft = styled.div`
  width: 920px;
  margin-right: 80px;
  height: 800px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
  border-radius: 20px;
`;

export const TitleContainer = styled.div`
  width: 920px;
  height: 100px;
  display: grid;
  grid-template-columns: 300px 200px 200px 200px;
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;

  align-items: center;
`;

export const ListContainer = styled.div`
  width: 920px;
  height: 700px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  overflow-x: hidden;
`;

export const ListItem = styled.li`
  width: 920px;
  height: 150px;
  display: grid;
  grid-template-columns: 300px 200px 200px 200px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 20px;
  margin-bottom: 10px;

  > p {
    display: flex;
    align-items: center;
    justify-content: center;

    > h3 {
      font-size: 14px;
      justify-content: flex-start;
      margin: 0 0;
      margin-left: 30px;
    }

    margin: 20px 0;
    > img {
      height: 40px;
      margin: 0 0;
      margin-left: 20px;
      width: auto;
    }
  }
`;

export const DeleteSymbol = styled(RiDeleteBin2Line)`
  width: 25px;
  height: auto;
`;

export const InfoSymbol = styled(RiInformationLine)`
  width: 25px;
  height: auto;
`;

export const ContainerRight = styled.div`
  width: 440px;
  height: 800px;
  box-shadow: rgba(255, 255, 255, 1) 1.95px 1.95px 2.6px;
  border-radius: 20px;
  background-color: #503047;
  display: flex;
  flex-direction: column;
`;

export const DetailTitleContainer = styled.div`
  width: 440px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(255, 255, 255, 1) 1.95px 1.95px 2.6px;
  > h3 {
    font-family: "Source Sans 3", sans-serif;
    font-weight: normal;
    font-size: 40px;
    color: #97aabd;
  }
  > p {
    color: white;
    font-family: "Source Sans 3", sans-serif;
  }
`;

export const DetailListContainer = styled.div`
  padding-top: 50px;
  height: 450px;
  border-bottom: 1px solid white;
  margin-bottom: 20px;
  > li {
    display: flex;
    color: white;
    font-size: 16px;
    justify-content: space-between;
    > p {
      margin: 0 0;
      margin-left: 27px;
      margin-right: 27px;
      margin-bottom: 10px;
    }
  }
`;

export const CheckoutContainer = styled.div`
  width: 440px;
  display: flex;
  flex-direction: column;


  > li {
    display: flex;
    margin: 0 0;
    justify-content: space-between;

    > p {
      color: white;
      margin: 0 0;
      margin-left: 60px;
      margin-right: 60px;
    }
  }

  > p {
    color: white;
  }
  > button {
    margin-top: 40px;
    height: 50px;
    width: 350px;
    border-radius: 15px;
  }
`;
