import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { listUser } from "../../../redux/actions/userActions";
import Loading from "../../Ui/Loading";
import {
  Container,
  CheckMark,
  EditSymbol,
  DeleteSymbol,
  AdminRow,
  NotSymbol,
} from "./Users.styles";
const Users = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.userList);
  const { userInfo } = useSelector((state) => state.userLogin);
  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listUser());
    } else {
      navigate('/')
    }
  }, [dispatch, listUser]);

  return loading ? (
    <Loading />
  ) : error ? (
    <p>{error.message}</p>
  ) : (
    <Container>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>ADMIN AND ACTION</th>
          </tr>
        </thead>
        <tbody>
          {!users ? (
            <p> No Orders here </p>
          ) : (
            users.map((users) => (
              <tr key={users._id}>
                <td>{users._id}</td>
                <td>{users.name}</td>
                <td>{users.email}</td>
                <AdminRow>
                  {users.isAdmin ? <CheckMark /> : <NotSymbol />}{" "}
                  <Link to="/">
                    <EditSymbol />
                  </Link>
                  <DeleteSymbol />
                </AdminRow>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </Container>
  );
};

export default Users;
