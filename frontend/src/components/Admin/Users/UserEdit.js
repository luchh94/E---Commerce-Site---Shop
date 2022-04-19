import React, { useState, useEffect } from "react";
import {
  PersonalContainer,
  InputContainer,
  Container,
  CheckBox,
} from "./UserEdit.styles";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getUserDetails, userEdit } from "../../../redux/actions/userActions";
import Loading from "../../Ui/Loading";
import {
  USER_DETAIL_RESET,
  USER_EDIT_RESET,
} from "../../../redux/constants/userConstants";

const UserEdit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const { userInfo } = useSelector((state) => state.userLogin);

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(userEdit({ _id: id, email, password, name, isAdmin }));
  };

  const { loading, error } = useSelector((state) => state.getUser);
  const { user } = useSelector((state) => state.userDetails);
  const { success: getUserSuccess } = useSelector((state) => state.userEdit);

  useEffect(() => {
    if (userInfo || !userInfo.isAdmin) {
      navigate("/signin");
    } else {
      if (getUserSuccess) {
        dispatch({ type: USER_EDIT_RESET });
        dispatch({ type: USER_DETAIL_RESET });
        navigate("/admin/users");
      }
      if (!user.name || user._id !== id) {
        dispatch(getUserDetails(id));
      } else {
        setEmail(user.email);
        setName(user.name);
        setIsAdmin(user.isAdmin);
      }
    }
  }, [user, id, dispatch, getUserSuccess, navigate, userInfo]);

  return loading ? (
    <Loading />
  ) : error ? (
    <p>{error.message}</p>
  ) : (
    <Container>
      <PersonalContainer>
        <h2>EDIT USER: </h2>
        <p>{user._id}</p>

        <form onSubmit={submitHandler}>
          <InputContainer>
            {" "}
            <label>Name</label>
            <input
              type="name"
              placeholder="Change name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </InputContainer>
          <InputContainer>
            {" "}
            <label>City</label>
            <input
              type="email"
              placeholder="Change email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </InputContainer>
          <InputContainer>
            {" "}
            <label>Password</label>
            <input
              type="password"
              placeholder="Change password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </InputContainer>
          <InputContainer>
            <label>
              Is Admin
              <CheckBox
                type="checkbox"
                checked={isAdmin}
                onChange={(e) => setIsAdmin(e.target.checked)}
              ></CheckBox>
            </label>
          </InputContainer>

          <button type="submit">Update</button>
        </form>
      </PersonalContainer>
    </Container>
  );
};

export default UserEdit;
