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
  PaypalButton,
} from "./OrderDetails.styles";
import { Link, useParams } from "react-router-dom";

import axios from "axios";
import { getOrderById, payOrder } from "./../../redux/actions/orderActions";
import { useSelector, useDispatch } from "react-redux";
import Loading from "./../Ui/Loading";
import { ORDER_PAY_RESET } from "../../redux/constants/orderConstants";

const OrderDetails = () => {
  const [isPaid, setPaid] = useState(false);
  const [sdkReady, setSdkReady] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  let totalPriceItem = [];
  let totalQty = [];

  const { order, loading } = useSelector((state) => state.orderDetails);
  
  const { loading: loadingPay, success: successPay } = useSelector(
    (state) => state.orderPay
  );

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

  cart.totalQty = totalQty;
  cart.totalPriceItem = totalPriceItem;

  useEffect(() => {
    const addPaypalScript = async () => {
      const { data: clientId } = await axios.get("/api/config/paypal");
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };

      document.body.appendChild(script);
    };

    if (!order || successPay) {
      dispatch({
        type: ORDER_PAY_RESET,
      });

      dispatch(getOrderById(id));
    } else if (!order.isPaid) {
      if (!window.paypal) {
        addPaypalScript();
      } else {
        setSdkReady(true);
      }
    }
  }, [dispatch, order, successPay, id]);

  const successPaymentHandler = (paymentResult) => {
    console.log(paymentResult);
    dispatch(payOrder(id, paymentResult));
    setPaid(true);
  };

  return loading ? (
    <Loading />
  ) : (
    <Container>
      <ShippingContainer>
        <h1>SHIPPING</h1>
        <div>
          <p> Name: {order.user && order.user.name }</p>
          <p> Email: {order.user && order.user.email}</p>
          <p>
            {" "}
            Adress:
            {order.shippingAdress.country}, {order.shippingAdress.city},{" "}
            {order.shippingAdress.zipcode}, {order.shippingAdress.adress}
          </p>
        </div>
      </ShippingContainer>
      <PaymentContainer>
        <h1>PAYMENT</h1>
        <div>
          <p>
            Payment Method: <h3>{cart.paymentMethod}</h3>
          </p>
          {order.isPaid ? (
            <h3>Order is paid!</h3>
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
          {order.orderItems.map((item) => (
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
        {!order.isPaid && (
          <div>
            {loadingPay && <Loading />}
            {!sdkReady  ? (
              <Loading />
            ) : (
              <PaypalButton
                amount={order.totalPrice}
                onSuccess={successPaymentHandler}
              />
            )}
          </div>
        )}
      </OrderSummaryContainer>
    </Container>
  );
};

export default OrderDetails;
