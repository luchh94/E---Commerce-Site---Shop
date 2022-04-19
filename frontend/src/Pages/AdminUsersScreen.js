import React from "react";
import { Fragment } from "react";
import Header from "../components/HomePage/Header/Header";
import User from './../components/Admin/Users/Users'

const AdminUsersScreen = () => {
  return (
    <Fragment>
      <Header />
      <User/>
    </Fragment>
  );
};

export default AdminUsersScreen;
