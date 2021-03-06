import {
  Container,
  ErrormessageContainer,
  PersonalContainer,
  LoginDataContainer,
  HeaderContainer,
  UpperContainer,
  BottomContainer,
  InputContainer,
  HeaderOrdersContainer,
  ListContainer,
  InfoSymbol,
} from "./Profile.styles";
import Loading from "../Ui/Loading";

import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails, updateDetail } from "../../redux/actions/userActions";
import { listOrders } from "../../redux/actions/orderActions";

import React from "react";
import { USER_UPDATE_RESET } from "../../redux/constants/userConstants";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;
  const { userInfo } = useSelector((state) => state.userLogin);
  const { success } = useSelector((state) => state.userUpdate);
  const {
    orders,
    loading: listLoading,
    error: listError,
  } = useSelector((state) => state.orderList);

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
      if (!user || !user.name || success) {
        dispatch({ type: USER_UPDATE_RESET });
        dispatch(getUserDetails("profile"));
        dispatch(listOrders());
      } else {
        setName(user.name);
        setEmail(user.email);
        setCity(user.city);
        setAdress(user.adress);
        setZipcode(user.zipcode);
        setCountry(user.country);
      }
    }
  }, [dispatch, navigate, userInfo, user, success]);

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

  return loading ? (
    <Loading />
  ) : (
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
      <BottomContainer>
        <HeaderOrdersContainer>
          <h1>Orders</h1>
        </HeaderOrdersContainer>
        <ListContainer>
          {listLoading ? (
            <Loading />
          ) : listError ? (
            <p>{listError}</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>DATE</th>
                  <th>TOTAL</th>
                  <th>PAID</th>
                  <th>DELIVERED</th>
                  <th>info</th>
                </tr>
              </thead>
              <tbody>
                {!orders ? (
                  <p> No Orders here </p>
                ) : (
                  orders.map((orders) => (
                    <tr key={orders._id}>
                      <td>{orders._id}</td>
                      <td>{orders.createdAt.substring(0, 10)}</td>
                      <td>{orders.totalPrice}</td>
                      <td>{orders.isPaid ? <a>yes</a> : <a>no</a>}</td>
                      <td>{orders.isDelivered ? <a>yes</a> : <a>no</a>}</td>
                      <td>
                        <Link to={`/orders/${orders._id}`}>
                          <InfoSymbol />
                        </Link>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          )}
        </ListContainer>
      </BottomContainer>
    </Container>
  );
};
export default Register;
