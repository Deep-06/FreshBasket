import {
  FETCH_CART_REQUEST,
  FETCH_CART_SUCCESS,
  FETCH_CART_FAILURE,
  UPDATE_CART_REQUEST,
  UPDATE_CART_SUCCESS,
  UPDATE_CART_FAILURE,
  CLEAR_CART,
} from "./actionTypes";

const initialState = {
  cart: [],
  isLoading: false,
  error: null
};


export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_CART_REQUEST:
    case UPDATE_CART_REQUEST:
      return { ...state, isLoading: true, error: null };

    case FETCH_CART_SUCCESS:
    case UPDATE_CART_SUCCESS:
      return { ...state, cart: payload || [], isLoading: false, error: null };

    case FETCH_CART_FAILURE:
    case UPDATE_CART_FAILURE:
      return { ...state, isLoading: false, error: payload };

    case CLEAR_CART:
      return { ...state, cart: [] };

    default:
      return state;
  }
};