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
import Loading from "../Ui/Loading";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails, updateDetail } from "../../redux/actions/userActions";

import React from "react";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;
  const { userInfo } = useSelector((state) => state.userLogin);
  const { success } = useSelector((state) => state.userUpdate);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState(null);
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [adress, setAdress] = useState("");
  const [country, setCountry] = useState("");

  useEffect(() => {
    if (!userInfo) {
      navigate("/signin");
    } else {
      if (!user.name) {
        dispatch(getUserDetails("profile"));
      } else {
        setName(user.name);
        setEmail(user.email);
        setCity(user.city);
        setAdress(user.adress);
        setZipcode(user.zipcode);
        setCountry(user.country);
      }
    }
  }, [dispatch, navigate, userInfo, user]);

  const submitHandler = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      dispatch(
        updateDetail({
          id: userInfo.id,
          name: name,
          email: email,
          password: password,
          zipcode: zipcode,
          adress: adress,
          city: city,
          country: country,
        })
      );
    }
  };

  return (
    <Container>
      <UpperContainer>
        <HeaderContainer>
          <h1>Profile Information</h1>
        </HeaderContainer>
        <ErrormessageContainer>
          {loading && <Loading />}
          {success && <p>SUCCESS!</p>}
          {error && <p>{error}</p>}
          {message && <p>{message}</p>}
        </ErrormessageContainer>
        <PersonalContainer>
          <h2>Personal Information</h2>
          <form onSubmit={submitHandler}>
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

            <button type="submit">Update</button>
          </form>
        </PersonalContainer>
        <LoginDataContainer>
          <h2>Login Data</h2>
          <form onSubmit={submitHandler}>
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
            <button type="submit">Update</button>
          </form>
        </LoginDataContainer>
      </UpperContainer>
      <BottomContainer></BottomContainer>
    </Container>
  );
};
export default Register;
