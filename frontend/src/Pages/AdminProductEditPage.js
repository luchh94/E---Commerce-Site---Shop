import React from "react";
import { Fragment } from "react";
import AdminProductEdit from "../components/Admin/Products/AdminProductEdit";

import Headerv2 from "../components/HomePage/Header/Headerv2";

const AdminProductEditPage = () => {
  return (
    <Fragment>
      <Headerv2 />
      <AdminProductEdit />
    </Fragment>
  );
};

export default AdminProductEditPage;
