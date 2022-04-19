import {
  ORDER_CREATE_FAIL,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_GET_FAIL,
  ORDER_GET_REQUEST,
  ORDER_GET_SUCCESS,
  ORDER_PAY_RESET,
  ORDER_PAY_REQUEST,
  ORDER_PAY_FAIL,
  ORDER_PAY_SUCCESS,
  ORDER_LIST_REQUEST,
  ORDER_LIST_SUCCESS,
  ORDER_LIST_FAIL,
  ORDER_GETALL_REQUEST,
  ORDER_GETALL_SUCCESS,
  ORDER_GETALL_RESET,
  ORDER_GETALL_FAIL,
} from "./../constants/orderConstants";

export const createOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_CREATE_REQUEST:
      return { loading: true };
    case ORDER_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        order: action.payload,
      };
    case ORDER_CREATE_FAIL:
      return {
        loading: false,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getOrderByIdReducer = (
  state = { loading: true, orderItems: [], shippingAddress: {} },
  action
) => {
  switch (action.type) {
    case ORDER_GET_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ORDER_GET_SUCCESS:
      return {
        loading: false,
        order: action.payload,
      };
    case ORDER_GET_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const updateOrderToPaidReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_PAY_REQUEST:
      return {
        loading: true,
      };
    case ORDER_PAY_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case ORDER_PAY_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case ORDER_PAY_RESET:
      return {};
    default:
      return state;
  }
};

export const getLoggedInUserOrdersReducer = (
  state = { orders: [] },
  action
) => {
  switch (action.type) {
    case ORDER_LIST_REQUEST:
      return {
        loading: true,
      };
    case ORDER_LIST_SUCCESS:
      return {
        loading: false,
        orders: action.payload,
      };
    case ORDER_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case ORDER_PAY_RESET:
      return {};
    default:
      return state;
  }
};

export const getAllOrdersReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case ORDER_GETALL_REQUEST:
      return {
        loading: true,
      };
    case ORDER_GETALL_SUCCESS:
      return {
        loading: false,
        orders: action.payload,
      };
    case ORDER_GETALL_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
