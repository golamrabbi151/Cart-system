import {
  CART_PRODUCT_REQUEST,
  CART_PRODUCT_SUCCESS,
  CART_PRODUCT_FAILED,
  ADD_CART_REQUEST,
  REMOVE_FROM_CART,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
  CLEAR_CART,
} from "../types";

// Prduct Get Action
export const productsList = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: CART_PRODUCT_REQUEST });
      let products = [];
      if (localStorage.getItem("products")) {
        products = JSON.parse(localStorage.getItem("products"));
      }
      dispatch({
        type: CART_PRODUCT_SUCCESS,
        payload: products,
      });
    } catch (error) {
      dispatch({
        type: CART_PRODUCT_FAILED,
        payload: error.message,
      });
    }
  };
};

// Product Add Action
export const addProduct = (data) => {
  return async (dispatch) =>
    dispatch({ type: ADD_CART_REQUEST, payload: data });
};

// Product Remove Action
export const removeProduct = (data) => {
  return async (dispatch) =>
    dispatch({ type: REMOVE_FROM_CART, payload: data });
};

// Increment Quantity
export const incrementQuantity = (data) => {
  return async (dispatch) =>
    dispatch({ type: INCREMENT_QUANTITY, payload: data });
};

// Decrement Quantity
export const decrementQuantity = (data) => {
  return async (dispatch) =>
    dispatch({ type: DECREMENT_QUANTITY, payload: data });
};

// Clear Cart
export const clearCart = () => {
  return async (dispatch) => dispatch({ type: CLEAR_CART });
};
