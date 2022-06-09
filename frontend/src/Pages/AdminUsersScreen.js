import React from "react";
import { Fragment } from "react";

import User from './../components/Admin/Users/Users'
import Headerv2 from "../components/HomePage/Header/Headerv2";

const AdminUsersScreen = () => {
  return (
    <Fragment>
      <Headerv2 />
      <User/>
    </Fragment>
  );
};

export default AdminUsersScreen;
