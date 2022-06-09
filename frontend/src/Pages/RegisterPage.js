import { React, Fragment } from "react";

import Register from "../components/Register/Register";
import Headerv2 from "../components/HomePage/Header/Headerv2";

const RegisterPage = () => {
  return (
    <Fragment>
      <Headerv2 />
      <Register />
    </Fragment>
  );
};

export default RegisterPage;
