import { Fragment } from "react";
import Header from "../components/HomePage/Header/Header";
import DetailPage from "../components/DetailPage/DetailPage";
import { useParams } from "react-router-dom";

const ProductPage = (props) => {
  let { id } = useParams();

  return (
    <Fragment>
      <Header />
      <DetailPage id={id} />
    </Fragment>
  );
};

export default ProductPage;
