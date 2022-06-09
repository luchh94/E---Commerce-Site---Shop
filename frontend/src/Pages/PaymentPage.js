import React, { Fragment } from "react";

import Payment from "../components/ShippingAndPayment/Payment";
import Headerv2 from "../components/HomePage/Header/Headerv2";

const PaymentPage = () => {
  return (
    <Fragment>
      <Headerv2 />
      <Payment />
    </Fragment>
  );
};

export default PaymentPage;
