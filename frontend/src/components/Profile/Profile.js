import {
  Container,
  ErrormessageContainer,
  PersonalContainer,
  LoginDataContainer,
  HeaderContainer,
  UpperContainer,
  BottomContainer,
  InputContainer,
} from "./Profile.styles";

import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "../../redux/actions/userActions";

import React from "react";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;
  const { userInfo } = useSelector((state) => state.userLogin);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState(null);
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [adress, setAdress] = useState("");

  useEffect(() => {
    if (!userInfo) {
      navigate("/signin");
    } else {
      dispatch(getUserDetails("profile"));

      console.log(user);
      setName(userInfo.name);
      setEmail(userInfo.email);
    }
  }, [dispatch, navigate, userInfo]);

  const submitHandler = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      console.log("Hello");
    }
  };

  return (
    <Container>
      <UpperContainer>
        <HeaderContainer>
          <h1>Profile Information</h1>
        </HeaderContainer>
        <ErrormessageContainer>
          {message && <p>{message}</p>}
        </ErrormessageContainer>
        <PersonalContainer>
          <h2>Personal Information</h2>
          <InputContainer>
            {" "}
            <label>Name</label>
            <input
              type="name"
              placeholder="Enter your Name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </InputContainer>
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

          <button>Update</button>
        </PersonalContainer>
        <LoginDataContainer>
          <h2>Login Data</h2>
          <InputContainer>
            {" "}
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your Email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </InputContainer>
          <InputContainer>
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your Password..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </InputContainer>
          <InputContainer>
            <label>Password</label>
            <input
              type="password"
              placeholder="Confirm your password..."
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></input>
          </InputContainer>
          <button>Update</button>
        </LoginDataContainer>
      </UpperContainer>
      <BottomContainer></BottomContainer>
    </Container>
  );
};
export default Register;
