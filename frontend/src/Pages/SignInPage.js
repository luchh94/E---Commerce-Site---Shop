import React, { Fragment } from "react";
import Header from "../components/HomePage/Header/Header";

import SignInComponents from "../components/SignIn/SignInComponents";
const SignInPage = () => {
  return (
    <Fragment>
      <Header />
      <SignInComponents />
    </Fragment>
  );
};

export default SignInPage;
