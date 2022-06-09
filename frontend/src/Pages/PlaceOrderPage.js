import React, { Fragment } from "react";

import PlaceOrder from "../components/PlaceOrder/PlaceOrder";
import Headerv2 from "../components/HomePage/Header/Headerv2";
const PlaceOrderPage = () => {
  return (
    <Fragment>
      <Headerv2 />
      <PlaceOrder />
    </Fragment>
  );
};

export default PlaceOrderPage;
