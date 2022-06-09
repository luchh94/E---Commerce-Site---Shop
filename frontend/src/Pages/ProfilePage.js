import React, { Fragment } from "react";

import Profile from "../components/Profile/Profile";
import Headerv2 from "../components/HomePage/Header/Headerv2";

const ProfilePage = () => {
  return (
    <Fragment>
      <Headerv2 />
      <Profile />
    </Fragment>
  );
};

export default ProfilePage;
