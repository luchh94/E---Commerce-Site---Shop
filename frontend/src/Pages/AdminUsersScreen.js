import React from "react";
import { Fragment } from "react";
import Header from "../components/HomePage/Header/Header";
import Users from "../components/Admin/Users/Users";

const AdminUsersScreen = () => {
  return (
    <Fragment>
      <Header />
      <Users />
    </Fragment>
  );
};

export default AdminUsersScreen;
