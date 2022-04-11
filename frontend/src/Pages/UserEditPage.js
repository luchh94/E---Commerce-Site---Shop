import React from "react";
import { Fragment } from "react";
import UserEdit from "../components/Admin/Users/UserEdit";
import Header from "./../components/HomePage/Header/Header";

const UserEditPage = () => {
  return (
    <Fragment>
      <Header />
      <UserEdit />
    </Fragment>
  );
};

export default UserEditPage;
