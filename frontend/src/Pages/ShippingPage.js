import React, { Fragment } from "react";

import Shipping from "../components/ShippingAndPayment/Shipping";
import Headerv2 from "../components/HomePage/Header/Headerv2";

const ShippingPage = () => {
  return (
    <Fragment>
      <Headerv2 />
      <Shipping />
    </Fragment>
  );
};

export default ShippingPage;
