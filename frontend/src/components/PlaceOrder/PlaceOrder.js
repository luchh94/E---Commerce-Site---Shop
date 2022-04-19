import React, { useEffect } from "react";
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
} from "./PlaceOrder.styles";
import { Link, useNavigate } from "react-router-dom";

import { createOrder } from "./../../redux/actions/orderActions";
import { useSelector, useDispatch } from "react-redux";

const PlaceOrder = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const cartItems = cart.cartItems;
  const navigate = useNavigate();

  let totalPriceItem = [];
  cartItems.map((el) => totalPriceItem.push(el.price * el.qty));
  totalPriceItem = totalPriceItem.reduce((acc, cur) => {
    return acc + cur;
  }, 0);

  let totalQty = [];
  cartItems.map((el) => totalQty.push(el.qty));
  totalQty = totalQty.reduce((acc, cur) => {
    return acc + cur;
  }, 0);

  const secondDecimal = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

  const taxPrice = secondDecimal(Number((totalPriceItem * 0.15).toFixed(2)));
  const totalPrice = Number(totalPriceItem) + Number(taxPrice);
  const shippingPrice = 0;

  cart.totalQty = totalQty;
  cart.totalPriceItem = totalPriceItem;
  cart.taxPrice = taxPrice;
  cart.shippingPrice = shippingPrice;
  cart.totalPrice = totalPrice;

  const { order, success, error } = useSelector((state) => state.orderCreate);

  useEffect(() => {
    if (success) {
      navigate(`/orders/${order.savedOrder._id}`);
    }
  }, [success, navigate]);

  const placeOrderHandler = () => {
    dispatch(
      createOrder({
        orderItems: cartItems,
        shippingAdress: cart.shippingAdress,
        taxPrice: cart.taxPrice,
        shippingPrice: cart.shippingPrice,
        paymentMethod: cart.paymentMethod,
        totalPrice: cart.totalPrice,
        totalPriceItem: cart.totalPriceItem,
      })
    );
  };

  return (
    <Container>
      {error && <p>{error}</p>}
      <ShippingContainer>
      
        <h1>SHIPPING</h1>
        <div>
          <p>
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
          <p>0.00$</p>
        </ItemContainer>
        <ItemContainer>
          <p>Taxes</p>
          <p>{taxPrice}$</p>
        </ItemContainer>
        <ItemContainer>
          <h3>TOTAL</h3>
          <p>{totalPrice}$</p>
        </ItemContainer>

        <button onClick={placeOrderHandler}>PLACE ORDER</button>
      </OrderSummaryContainer>
    </Container>
  );
};

export default PlaceOrder;
