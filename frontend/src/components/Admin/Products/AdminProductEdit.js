import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  PersonalContainer,
  InputContainer,
  Container,

} from "./AdminProductEdit.styles";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../Ui/Loading";
import {
  listProductDetail,
  updateProduct,
} from "../../../redux/actions/productActions";
import { PRODUCT_UPDATE_RESET } from "../../../redux/constants/productConstants";

const AdminProductEdit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);
  const [countInStock, setCountInStock] = useState(0);
  const [image, setImage] = useState("");
  const [uploading, setUploading] = useState(false);

  const { userInfo } = useSelector((state) => state.userLogin);
  const { loading, error, product } = useSelector(
    (state) => state.productDetail
  );

  const {
    success: successUpdate,
  } = useSelector((state) => state.productUpdate);


  useEffect(() => {
    if (!userInfo || !userInfo.isAdmin) {
      navigate("/signin");
    } else {
      if (successUpdate) {
        dispatch({ type: PRODUCT_UPDATE_RESET });
        navigate("/admin/products/");
      } else {
        if (!product.name || product._id !== id) {
          dispatch(listProductDetail(id));
        } else {
          setName(product.name);
          setBrand(product.brand);
          setDescription(product.description);
          setCategory(product.category);
          setPrice(product.price);
          setCountInStock(product.countInStock);
          setImage(product.image);
        }
      }
    }
  }, [dispatch, id, product, successUpdate, navigate, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateProduct({
        _id: id,
        name,
        price,
        image,
        brand,
        category,
        description,
        countInStock,
      })
    );
  };

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    setUploading(true);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      const { data } = await axios.post("/api/upload", formData, config);
      setImage(data);

      setUploading(false);
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
  };

  return loading ? (
    <Loading />
  ) : error ? (
    <p>{error.message}</p>
  ) : (
    <Container>
      <PersonalContainer>
        <h2>EDIT PRODUCT: </h2>
        <p>{product._id}</p>

        <form onSubmit={submitHandler}>
          <InputContainer>
            {" "}
            <label>Name</label>
            <input
              type="name"
              placeholder="Change name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </InputContainer>
          <InputContainer>
            {" "}
            <label>Brand</label>
            <input
              type="brand"
              placeholder="Change Brand..."
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            ></input>
          </InputContainer>
          <InputContainer>
            {" "}
            <label>Description</label>
            <input
              type="description"
              placeholder="Change description..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></input>
          </InputContainer>
          <InputContainer>
            {" "}
            <label>Category</label>
            <input
              type="category"
              placeholder="Change description..."
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            ></input>
          </InputContainer>
          <InputContainer>
            {" "}
            <label>Price</label>
            <input
              type="price"
              placeholder="Change Price..."
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            ></input>
          </InputContainer>
          <InputContainer>
            {" "}
            <label>Count In Stock</label>
            <input
              type="description"
              placeholder="Change Count in Stock"
              value={countInStock}
              onChange={(e) => setCountInStock(e.target.value)}
            ></input>
          </InputContainer>
          <InputContainer>
            {" "}
            <label>Image</label>
            <input
              type="text"
              placeholder="Enter image url"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            ></input>
            <input
              type="file"
              id="image-file"
              label="Choose File"
              custom
              onChange={uploadFileHandler}
            ></input>
            {uploading && <Loading />}
          </InputContainer>
          <button type="submit">Update</button>
        </form>
      </PersonalContainer>
    </Container>
  );
};

export default AdminProductEdit;
