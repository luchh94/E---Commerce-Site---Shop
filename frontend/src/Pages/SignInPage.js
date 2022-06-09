import React, { Fragment } from "react";

import Headerv2 from "../components/HomePage/Header/Headerv2";
import SignInComponents from "../components/SignIn/SignInComponents";
const SignInPage = () => {
  return (
    <Fragment>
      <Headerv2 />
      <SignInComponents />
    </Fragment>
  );
};

export default SignInPage;
