import { Fragment } from "react";

import CartPageComponents from "../components/Cart/CartPageComponents";
import Header from "../components/HomePage/Header/Header";

import React from "react";

const CartPage = (props) => {
  return (
    <Fragment>
      <Header />
      <CartPageComponents />
    </Fragment>
  );
};

export default CartPage;
