import React from "react";
import { Fragment, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import {
  Container,
  ContainerLeft,
  ContainerRight,
  Title,
  ListContainer,
  ListItem,
  TitleContainer,
  DeleteSymbol,
  InfoSymbol,
  CartSymbol,
  DetailTitleContainer,
  DetailListContainer,
  CheckoutContainer,
} from "./CartPageComponents.styles";
import { useDispatch, useSelector } from "react-redux";
import {
  cartActionsAdd,
  cartActionsRemove,
} from "./../../redux/actions/cartActions";
import { Link } from "react-router-dom";

const CartPageComponents = (props) => {
  const { id } = useParams();
  const productId = id;
  const { search } = useLocation();
  const navigate = useNavigate();
  const qty = Number(search.split("?")[1]);

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (productId) {
      dispatch(cartActionsAdd(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeItemHandler = (id, e) => {
    dispatch(cartActionsRemove(id));
  };

  let totalPrice = [];
  cartItems.map((el) => totalPrice.push(el.price * el.qty));
  totalPrice = totalPrice.reduce((acc, cur) => {
    return acc + cur;
  }, 0);

  let totalQty = [];
  cartItems.map((el) => totalQty.push(el.qty));
  totalQty = totalQty.reduce((acc, cur) => {
    return acc + cur;
  }, 0);

  const redirectHandler = (e) => {
    e.preventDefault();
    navigate("/shipping");
  };

  return (
    <Fragment>
      <Title>
        <CartSymbol />
        <h1>CART</h1>
      </Title>
      <Container>
        <ContainerLeft>
          <TitleContainer>
            <p>ITEMS</p>
            <p>PRICE</p>

            <p>QTY</p>
          </TitleContainer>
          <ListContainer>
            {cartItems.map((item) => (
              <ListItem>
                <p>
                  <img src={item.image} alt="itemPicture" />
                  <h3>{item.name}</h3>
                </p>
                <p>{item.price * item.qty}$</p>
                <p>
                  <select
                    type="select"
                    value={item.qty}
                    onChange={(e) =>
                      dispatch(
                        cartActionsAdd(item.product, Number(e.target.value))
                      )
                    }
                  >
                    {[...Array(item.countInStock).keys()].map((number) => (
                      <option value={number + 1}>{number + 1}</option>
                    ))}
                  </select>
                </p>
                <p>
                  <button onClick={() => removeItemHandler(item.product)}>
                    <DeleteSymbol />
                  </button>
                  <Link to={`/products/${item.product}`}>
                    <InfoSymbol />
                  </Link>
                </p>
              </ListItem>
            ))}
          </ListContainer>
        </ContainerLeft>
        <ContainerRight>
          <DetailTitleContainer>
            <h3>Cart Details</h3>
            <p>Completing Your Order...</p>
          </DetailTitleContainer>
          <DetailListContainer>
            {cartItems.map((item) => (
              <li>
                <p>{item.qty}x</p>
                <p>{item.name}</p>
                <p>{item.price * item.qty}$</p>
              </li>
            ))}
          </DetailListContainer>
          <CheckoutContainer>
            <li>
              <p>SubTotal-Items: </p>
              <p>{totalQty}</p>
            </li>
            <li>
              <h3>TOTAL: </h3>
              <h4>{totalPrice}$</h4>
            </li>

            <button onClick={redirectHandler}>CHECKOUT</button>
          </CheckoutContainer>
        </ContainerRight>
      </Container>
    </Fragment>
  );
};

export default CartPageComponents;
