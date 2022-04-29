import { Fragment } from "react";
import Header from "../components/HomePage/Header/Header";
import DetailPage from "../components/DetailPage/DetailPage";
import { useParams } from "react-router-dom";
import Meta from "../components/Meta";

const ProductPage = (props) => {
  let { id } = useParams();

  return (
    <Fragment>
      <Meta title={"Product Detail Page"}/>
      <Header />
      <DetailPage id={id} />
    </Fragment>
  );
};

export default ProductPage;
