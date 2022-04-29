import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" contet={description} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Welcome to Tech For Today",
  description: "We sell Tech for a fair Price",
};

export default Meta;
