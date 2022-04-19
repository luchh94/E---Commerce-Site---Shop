import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  createProduct,
  deleteProduct,
} from "../../../redux/actions/productActions";
import { listProducts } from "../../../redux/actions/productActions";
import { PRODUCT_CREATE_RESET } from "../../../redux/constants/productConstants";
import Loading from "../../Ui/Loading";
import {
  Container,

  EditSymbol,
  DeleteSymbol,
  AdminRow,
  EditLink,

} from "./AdminProductList.styles";

const AdminProductList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { success: successDelete } = useSelector((state) => state.productDelete);
  const { userInfo } = useSelector((state) => state.userLogin);
  const { success:createSuccess, product} = useSelector(
    (state) => state.productCreate
  );
  const productList = useSelector((state) => state.productList);
  const { loading, products, error } = productList;
  useEffect(() => {
    dispatch({ type: PRODUCT_CREATE_RESET });
    if (userInfo && userInfo.isAdmin) {
      dispatch(listProducts());
    } else {
      navigate("/login");
    }
    if(createSuccess){
      navigate(`/admin/products/${product._id}/edit`)
    }
  }, [dispatch, successDelete, createSuccess, product, navigate, userInfo]);

  const deleteProductHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteProduct(id));
    }
  };

  const createProductHandler = (e) => {
    e.preventDefault();
    dispatch(createProduct());
  };

  return loading ? (
    <Loading />
  ) : error ? (
    <p>{error.message}</p>
  ) : (
    <Container>
      <div>
        <h1>PRODUCTS</h1>
        <button onClick={createProductHandler}>+ Add Product</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>PRICE</th>
            <th>CATEGORY</th>
            <th>BRAND</th>
            <th>ADMIN AND ACTION</th>
          </tr>
        </thead>
        <tbody>
          {!products ? (
            <p> No Users or Refresh Site </p>
          ) : (
            products.map((product) => (
              <tr key={product._id}>
                <td>{product._id}</td>
                <td>{product.name}</td>
                <td>{product.price}$</td>
                <td>{product.category}</td>
                <td>{product.brand}</td>
                <AdminRow>
                  <EditLink to={`/admin/products/${product._id}/edit`}>
                    <EditSymbol />
                  </EditLink>

                  <DeleteSymbol
                    onClick={() => deleteProductHandler(product._id)}
                  />
                </AdminRow>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </Container>
  );
};

export default AdminProductList;
