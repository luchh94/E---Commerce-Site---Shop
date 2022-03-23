import {
  Container,
  ErrormessageContainer,
  FormContainer,
  HeaderContainer,
} from "./Register.styles";

import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register, login } from "../../redux/actions/userActions";

import React from "react";

const Register = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error, loading, userInfo } = useSelector((state) => state.userLogin);
  const redirect = search ? search.split("=")[1] : "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState(null);

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, userInfo, redirect]);

  const submitHandler = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      dispatch(register(name, email, password));
    }
  };

  return (
    <Container>
      <HeaderContainer>
        <h1>SIGN IN</h1>
      </HeaderContainer>
      <ErrormessageContainer>{message && <p>{message}</p>}</ErrormessageContainer>
      <FormContainer>
        <form onSubmit={submitHandler}>
          <label>Name</label>
          <input
            type="name"
            placeholder="Enter your Name..."
            onChange={(e) => setName(e.target.value)}
            value={name}
          ></input>
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter Email..."
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          ></input>
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter Password..."
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          ></input>
          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm Password..."
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          ></input>
          <button type="submit">SIGN IN</button>
        </form>
        <p>
          You already have an account?{" "}
          <Link to={redirect ? `/signin?redirect=${redirect}` : "/"}>
            {" "}
            Login!
          </Link>
        </p>
      </FormContainer>
    </Container>
  );
};
export default Register;
