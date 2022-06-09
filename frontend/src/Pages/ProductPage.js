import { Fragment } from "react";

import DetailPage from "../components/DetailPage/DetailPage";
import { useParams } from "react-router-dom";
import Meta from "../components/Meta";
import Headerv2 from "../components/HomePage/Header/Headerv2";

const ProductPage = (props) => {
  let { id } = useParams();

  return (
    <Fragment>
      <Meta title={"Product Detail Page"} />
      <Headerv2 />
      <DetailPage id={id} />
    </Fragment>
  );
};

export default ProductPage;
