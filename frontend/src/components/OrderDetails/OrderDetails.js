import React, { useEffect, useState } from "react";
import {
  Container,
  ShippingContainer,
  OrderContainer,
  OrderSummaryContainer,
  PaymentContainer,
  ListContainer,
  ListItem,
  InfoSymbol,
  ItemContainer,
} from "./OrderDetails.styles";
import { Link, useNavigate, useParams } from "react-router-dom";

import { getOrderById } from "./../../redux/actions/orderActions";
import { useSelector, useDispatch } from "react-redux";
import Loading from "./../Ui/Loading";

const OrderDetails = () => {
  const [isPaid, setPaid] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const cartItems = cart.cartItems;
  const navigate = useNavigate();

  let totalPriceItem = [];
  let totalQty = [];

  const { order, loading, error } = useSelector((state) => state.orderDetails);

  if (!loading) {
    order.orderItems.map((el) => totalPriceItem.push(el.price * el.qty));
    totalPriceItem = totalPriceItem.reduce((acc, cur) => {
      return acc + cur;
    }, 0);

    order.orderItems.map((el) => totalQty.push(el.qty));
    totalQty = totalQty.reduce((acc, cur) => {
      return acc + cur;
    }, 0);
  }
  const secondDecimal = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

  cart.totalQty = totalQty;
  cart.totalPriceItem = totalPriceItem;

  useEffect(() => {
    dispatch(getOrderById(id));
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <Container>
      <ShippingContainer>
        <h1>SHIPPING</h1>
        <div>
          <p> Name: {order.user.name}</p>
          <p> Email: {order.user.email}</p>
          <p>
            {" "}
            Adress:
            {cart.shippingAdress.country}, {cart.shippingAdress.city},{" "}
            {cart.shippingAdress.zipcode}, {cart.shippingAdress.adress}
          </p>
        </div>
      </ShippingContainer>
      <PaymentContainer>
        <h1>PAYMENT</h1>
        <div>
          <p>
            Payment Method: <h3>{cart.paymentMethod}</h3>
          </p>
          {isPaid ? (
            <p>Order is paid!</p>
          ) : (
            <div>
              {" "}
              <div>ORDER IS NOT PAID YET</div>
            </div>
          )}
        </div>
      </PaymentContainer>
      <OrderContainer>
        <h1>ORDERS</h1>
        <ListContainer>
          {cartItems.map((item) => (
            <ListItem>
              <p>
                <img src={item.image} alt="itemPicture" />
                <h3>{item.name}</h3>
              </p>
              <p>Count: {item.qty}</p>
              <p> Total Price: {item.price * item.qty}$</p>

              <p>
                <Link to={`/products/${item.product}`}>
                  <InfoSymbol />
                </Link>
              </p>
            </ListItem>
          ))}
        </ListContainer>
      </OrderContainer>
      <OrderSummaryContainer>
        <h1>SUMMARY</h1>
        <ItemContainer>
          <p>Items</p>
          <p>{totalQty}</p>
        </ItemContainer>
        <ItemContainer>
          <p>Items Price</p>
          <p>{totalPriceItem}$</p>
        </ItemContainer>
        <ItemContainer>
          <p>Shipping</p>
          <p>{order.shippingPrice}$</p>
        </ItemContainer>
        <ItemContainer>
          <p>Taxes</p>
          <p>{order.taxPrice}$</p>
        </ItemContainer>
        <ItemContainer>
          <h3>TOTAL</h3>
          <p>{order.totalPrice}$</p>
        </ItemContainer>
      </OrderSummaryContainer>
    </Container>
  );
};

export default OrderDetails;
