import React, { Fragment } from "react";
import Header from "./../components/HomePage/Header/Header";
import AdminOrders from "./../components/Admin/Orders/AdminOrders";
const AdminOrderPage = () => {
  return (
    <Fragment>
      <Header />
      <AdminOrders />
    </Fragment>
  );
};

export default AdminOrderPage;
