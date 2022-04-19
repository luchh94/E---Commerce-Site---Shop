import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productListReducer,
  productDetailReducer,
  productDeleteReducer,
  productCreateReducer,
  productUpdateReducer,
  productCreateReviewReducer,
} from "./redux/reducers/productReducers";
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailReducer,
  userUpdateProfileReducer,
  userListReducer,
  userDeleteReducer,
  getUserReducer,
  userEditReducer,
} from "./redux/reducers/userReducers";
import { cartReducer } from "./redux/reducers/cartReducer";
import {
  createOrderReducer,
  getOrderByIdReducer,
  updateOrderToPaidReducer,
  getLoggedInUserOrdersReducer,
  getAllOrdersReducer,
} from "./redux/reducers/orderReducer";

const reducer = combineReducers({
  productList: productListReducer,
  cart: cartReducer,
  productDetail: productDetailReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailReducer,
  userUpdate: userUpdateProfileReducer,
  orderCreate: createOrderReducer,
  orderDetails: getOrderByIdReducer,
  orderPay: updateOrderToPaidReducer,
  orderList: getLoggedInUserOrdersReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,
  getUser: getUserReducer,
  userEdit: userEditReducer,
  productDelete: productDeleteReducer,
  productCreate: productCreateReducer,
  productUpdate: productUpdateReducer,
  getAllOrders: getAllOrdersReducer,
  productCreateReview: productCreateReviewReducer,
});

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const userInfoFromStorage = localStorage.getItem("userData")
  ? JSON.parse(localStorage.getItem("userData"))
  : null;

const shippingAdressFromStorage = localStorage.getItem("shippingAdress")
  ? JSON.parse(localStorage.getItem("shippingAdress"))
  : {};

const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAdress: shippingAdressFromStorage,
  },
  userLogin: {
    userInfo: userInfoFromStorage,
  },
};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
