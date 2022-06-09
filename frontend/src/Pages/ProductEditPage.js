import React from "react";
import { Fragment } from "react";

import AdminProductList from "./../components/Admin/Products/AdminProductList";
import Headerv2 from "../components/HomePage/Header/Headerv2";

const ProductEditPage = () => {
  return (
    <Fragment>
      <Headerv2 />
      <AdminProductList />
    </Fragment>
  );
};

export default ProductEditPage;
