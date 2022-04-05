import {
  Container,
  ErrormessageContainer,
  FormContainer,
  HeaderContainer,
  InputContainer,
} from "./Payment.styles";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { savePaymentMethod } from "../../redux/actions/cartActions";

import React from "react";

const Payment = () => {
  const { userInfo } = useSelector((state) => state.userLogin);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [payment, setPayment] = useState();

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(savePaymentMethod(payment));
    navigate("/placeorder");
  };

  useEffect(() => {
    if (!userInfo) {
      navigate("/signin");
    }
  }, [navigate, userInfo]);

  return (
    <Container>
      <HeaderContainer>
        <h1>PAYMENT METHOD</h1>
      </HeaderContainer>
      <ErrormessageContainer></ErrormessageContainer>
      <FormContainer>
        <form onSubmit={submitHandler}>
          <InputContainer>
            <label>Paypal or CreditCard</label>
            <input
              type="radio"
              value="paypal"
              placeholder="Enter your Name..."
              onChange={(e) => setPayment(e.target.value)}
            ></input>
          </InputContainer>

          <button type="submit">Continue</button>
        </form>
      </FormContainer>
    </Container>
  );
};
export default Payment;
