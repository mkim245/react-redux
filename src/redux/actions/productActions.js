import fakestoreapi from "../../apis/fakeStoreApi";
import { ActionTypes } from "../constants/action-types";

// this async needs middleware to hold action creator until it receives data from server.
// once data is received, it gonna dispatch and create new state
// from https://github.com/reduxjs/redux-thunk/blob/master/src/index.ts
export const fetchProducts = () => async (dispatch) => {
    const response = await fakestoreapi.get("/products");
    dispatch({type:ActionTypes.FETCH_PRODUCTS, payload: response.data});
  };

  export const fetchProduct = (id) => async (dispatch) => {
    const response = await fakestoreapi.get(`/products/${id}`);
    dispatch({type:ActionTypes.SELECTED_PRODUCT, payload: response.data});
  };

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};