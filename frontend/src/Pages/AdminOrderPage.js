import React, { Fragment } from "react";

import AdminOrders from "./../components/Admin/Orders/AdminOrders";
import Headerv2 from "../components/HomePage/Header/Headerv2";
const AdminOrderPage = () => {
  return (
    <Fragment>
      <Headerv2 />
      <AdminOrders />
    </Fragment>
  );
};

export default AdminOrderPage;
