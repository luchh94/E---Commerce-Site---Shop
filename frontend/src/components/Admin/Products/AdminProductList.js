import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { listProducts } from "../../../redux/actions/productActions";
import Loading from "../../Ui/Loading";
import {
  Container,
  CheckMark,
  EditSymbol,
  DeleteSymbol,
  AdminRow,
  NotSymbol,
} from "./AdminProductList.styles";

const Users = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { success: successDelete } = useSelector((state) => state.userDelete);
  const { userInfo } = useSelector((state) => state.userLogin);
  const productList = useSelector((state) => state.productList);
  const { loading, products, error } = productList;
  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listProducts());
    } else {
      navigate("/login");
    }
  }, [dispatch]);

  const deleteUserHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      console.log("delete");
    }
  };

  return loading ? (
    <Loading />
  ) : error ? (
    <p>{error.message}</p>
  ) : (
    <Container>
      <div>
        <h1>PRODUCTS</h1>
        <button>+ Add Product</button>
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
                  <Link to={`/admin/product/edit/${product._id}`}>
                    <EditSymbol />
                  </Link>
                  <DeleteSymbol
                    onClick={() => deleteUserHandler(product._id)}
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

export default Users;
