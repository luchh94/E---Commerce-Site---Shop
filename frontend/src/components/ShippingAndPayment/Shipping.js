import {
  Container,
  ErrormessageContainer,
  FormContainer,
  HeaderContainer,
  InputContainer,
} from "./Shipping.styles";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingAdress } from "../../redux/actions/cartActions";

const Shipping = () => {
  const cart = useSelector((state) => state.cart);
  const { shippingAdress } = cart;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.userLogin);

  const [city, setCity] = useState(shippingAdress.city);
  const [zipcode, setZipcode] = useState(shippingAdress.zipcode);
  const [adress, setAdress] = useState(shippingAdress.adress);
  const [country, setCountry] = useState(shippingAdress.country);

  const submitHandler = (e) => {
    dispatch(saveShippingAdress({ city, zipcode, adress, country }));
    navigate("/payment");
  };

  useEffect(() => {
    if (!userInfo) {
      navigate("/signin");
    }
  }, [navigate, userInfo]);

  return (
    <Container>
      <HeaderContainer>
        <h1>Shipping Adress</h1>
      </HeaderContainer>
      <ErrormessageContainer></ErrormessageContainer>
      <FormContainer>
        <form onSubmit={submitHandler}>
          <InputContainer>
            {" "}
            <label>City</label>
            <input
              type="city"
              placeholder="Enter your City..."
              value={city}
              onChange={(e) => setCity(e.target.value)}
            ></input>
          </InputContainer>
          <InputContainer>
            {" "}
            <label>Country</label>
            <input
              type="city"
              placeholder="Enter your Country..."
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            ></input>
          </InputContainer>
          <InputContainer>
            {" "}
            <label>Zip-Code</label>
            <input
              type="zipCode"
              placeholder="Enter your Zip Code..."
              value={zipcode}
              onChange={(e) => setZipcode(e.target.value)}
            ></input>
          </InputContainer>
          <InputContainer>
            <label>Adress</label>
            <input
              type="name"
              placeholder="Enter your Adress..."
              value={adress}
              onChange={(e) => setAdress(e.target.value)}
            ></input>
          </InputContainer>
          <button>Payment</button>
        </form>
      </FormContainer>
    </Container>
  );
};

export default Shipping;
