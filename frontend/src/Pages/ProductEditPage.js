import React from "react";
import { Fragment } from "react";
import Header from "./../components/HomePage/Header/Header";
import AdminProductList from "./../components/Admin/Products/AdminProductList";

const ProductEditPage = () => {
  return (
    <Fragment>
      <Header />
      <AdminProductList />
    </Fragment>
  );
};

export default ProductEditPage;
