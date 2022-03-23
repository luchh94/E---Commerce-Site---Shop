import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Ui/Loading";
import { login } from "../../redux/actions/userActions";
import {
  Container,
  ErrormessageContainer,
  FormContainer,
  HeaderContainer,
} from "./SignInComponents.styles";

import { Link, useLocation, useNavigate } from "react-router-dom";

const SignInComponents = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { loading, error, userInfo } = useSelector((state) => state.userLogin);

  const { search } = useLocation();
  const navigate = useNavigate();
  const redirect = search ? search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <Container>
      <HeaderContainer>
        <h1>SIGN IN</h1>
      </HeaderContainer>
      <ErrormessageContainer>{error && <p>{error}</p>}</ErrormessageContainer>
      <FormContainer>
        <form onSubmit={submitHandler}>
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
          <button type="submit">SIGN IN</button>
        </form>
        <p>
          You are a new Customer?{" "}
          <Link to={redirect ? `/register?redirect=${redirect}` : "/"}>
            {" "}
            Register!
          </Link>
        </p>
      </FormContainer>
    </Container>
  );
};

export default SignInComponents;
