import React, { Fragment } from "react";
import Header from "../components/HomePage/Header/Header";
import SearchPageComponents from "../components/SearchPage/SearchPageComponents";

const SearchPage = () => {
  return (
    <Fragment>
      <Header />
      <SearchPageComponents />
    </Fragment>
  );
};

export default SearchPage;
