import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllOrders } from "../../../redux/actions/orderActions";

import Loading from "../../Ui/Loading";
import {
  Container,
  InfoSymbol,

  AdminRow,
  EditLink,
  CheckMark,
  NotSymbol,
} from "./AdminOrders.styles";

const AdminOrders = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userLogin);
  const { loading, error, orders } = useSelector((state) => state.getAllOrders);
 
  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(getAllOrders());
    } else {
      navigate("/signup");
    }
  }, [userInfo, dispatch, navigate]);

  return loading ? (
    <Loading />
  ) : error ? (
    <p>{error.message}</p>
  ) : (
    <Container>
      <div>
        <h1>ORDERS</h1>
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>USER</th>
            <th>DATE</th>
            <th>TOTAL</th>
            <th>PAID</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {!orders ? (
            <p> No Order or Refresh </p>
          ) : (
            orders.map((orders) => (
              <tr key={orders._id}>
                <td>{orders._id}</td>
                <td>{orders.user && orders.user.name}</td>
                <td>{orders.createdAt}</td>
                <td>{orders.totalPrice}$</td>
                <td>{orders.isPaid ? <CheckMark /> : <NotSymbol />}</td>
                <AdminRow>
                  <EditLink to={`/orders/${orders._id}`}>
                    <InfoSymbol />
                  </EditLink>
                </AdminRow>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </Container>
  );
};

export default AdminOrders;
