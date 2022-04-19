import React from "react";
import { Fragment } from "react";
import AdminProductEdit from "../components/Admin/Products/AdminProductEdit";
import Header from "../components/HomePage/Header/Header";

const AdminProductEditPage = () => {
  return (
    <Fragment>
      <Header />
      <AdminProductEdit />
    </Fragment>
  );
};

export default AdminProductEditPage;
