import React, { Fragment } from "react";

import SearchPageComponents from "../components/SearchPage/SearchPageComponents";
import Headerv2 from "../components/HomePage/Header/Headerv2";

const SearchPage = () => {
  return (
    <Fragment>
      <Headerv2 />
      <SearchPageComponents />
    </Fragment>
  );
};

export default SearchPage;
