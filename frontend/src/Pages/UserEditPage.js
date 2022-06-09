import React from "react";
import { Fragment } from "react";
import UserEdit from "../components/Admin/Users/UserEdit";

import Headerv2 from "../components/HomePage/Header/Headerv2";

const UserEditPage = () => {
  return (
    <Fragment>
      <Headerv2 />
      <UserEdit />
    </Fragment>
  );
};

export default UserEditPage;
