import { Fragment } from "react";

import CartPageComponents from "../components/Cart/CartPageComponents";

import Headerv2 from "../components/HomePage/Header/Headerv2";

import React from "react";

const CartPage = (props) => {
  return (
    <Fragment>
      <Headerv2 />
      <CartPageComponents />
    </Fragment>
  );
};

export default CartPage;
