import styled from "styled-components";

import { RiInformationLine } from "react-icons/ri";
import { PayPalButton } from "react-paypal-button-v2";

export const Container = styled.div`
  width: 75%;
  height: 100vh;

  display: grid;
  grid-template-columns: 1fr 0.4fr;
  grid-template-rows: 2fr 2fr 5fr;
  grid-gap: 2rem;
  grid-template-areas:
    "shipping ordersum"
    "payment ordersum"
    "orderitems ordersum";
`;

export const ShippingContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: auto;
  grid-area: shipping;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  > div {
    width: 70%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    > p {
      margin-top: 20px;

      font-size: 1rem;
    }
  }

  > h1 {
    padding-bottom: 7px;
    font-size: 1.5rem;
    font-weight: normal;
    font-family: "Source Sans 3", sans-serif;
    letter-spacing: 3px;
    border-bottom: 1px solid black;
  }
`;
export const PaymentContainer = styled.div`
  width: 100%;
  height: auto;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  grid-area: payment;
  display: flex;
  flex-direction: column;

  > div {
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    > div {
      width: 100%;
      height: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1rem;
      margin-top: 20px;
      background-color: #841f34;
      padding: 10px 10px;
      color: white;
      opacity: 70%;
    }
    > h3 {
      background-color: #9ad8aa;
      color: white;
      width: 100%;
      justify-content: center;
      text-align: center;
    }

    justify-content: center;
    > p {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1rem;
      margin-top: 20px;
      letter-spacing: 5px;
      > h3 {
        opacity: 75%;
        margin-left: 10px;
      }
    }
  }

  > h1 {
    padding-bottom: 7px;
    font-size: 1.5rem;
    font-weight: normal;
    font-family: "Source Sans 3", sans-serif;
    letter-spacing: 3px;
    border-bottom: 1px solid black;
  }
`;

export const OrderContainer = styled.div`
  grid-area: orderitems;
  width: 100%;
  height: auto;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  > h1 {
    padding-bottom: 7px;
    font-size: 1.5rem;
    font-weight: normal;
    font-family: "Source Sans 3", sans-serif;
    letter-spacing: 3px;
    border-bottom: 1px solid black;
  }
`;

export const InfoSymbol = styled(RiInformationLine)`
  width: 150%;
  height: auto;
`;

export const ListContainer = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export const ListItem = styled.li`
  width: 100%;
  height: 5000px;
  display: flex;
  justify-content: space-around;
  box-shadow: rgba(17, 17, 26, 0.05) 0px 4px 16px,
    rgba(17, 17, 26, 0.05) 0px 8px 32px;

  margin-bottom: 10px;

  > p {
    margin: 0px 0px;
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    letter-spacing: 2px;
    font-size: 1rem;

    > h3 {
      font-size: 0.8rem;
      justify-content: flex-start;
      margin: 0 0;
      margin-left: 30px;
    }

    > img {
      height: 40px;
      margin: 0 0;
      margin-left: 20px;
      width: auto;
    }
  }
`;

export const OrderSummaryContainer = styled.div`
  width: 100%;
  height: 70%;
  grid-area: ordersum;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  display: flex;
  flex-direction: column;

  >div{
    width: 100%;
    margin-top: 10%;
  }

  > h1 {
    padding-bottom: 7px;
    font-size: 1.5rem;
    font-weight: normal;
    font-family: "Source Sans 3", sans-serif;
    letter-spacing: 3px;

    margin-bottom: 10px;
  }
  > button {
    background-color: black;
    color: white;
    width: 85%;
    height: 40px;
  }
`;

export const ItemContainer = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  margin: 10 0;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
  align-items: center;
  > p {
    margin: 0px 30px;
  }
  > h3 {
    margin: 0px 30px;
    font-size: 1.5rem;
    opacity: 70%;
  }
`;

export const PaypalButton = styled(PayPalButton)`
  height: 100%;
  width: 1000px;
`;
