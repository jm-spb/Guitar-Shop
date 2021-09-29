import { ADD_ITEM_CART, CLEAR_CART, REMOVE_CART_ITEM, PLUS_CART_ITEM, MINUS_CART_ITEM } from '../actionTypes';

export const addItemToCart = (itemObj) => ({
  type: ADD_ITEM_CART,
  payload: itemObj
});

export const clearCart = () => ({
  type: CLEAR_CART
});

export const removeCartItem = (id) => ({
  type: REMOVE_CART_ITEM,
  payload: id
});

export const plusCartItem = (id) => ({
  type: PLUS_CART_ITEM,
  payload: id
});

export const minusCartItem = (id) => ({
  type: MINUS_CART_ITEM,
  payload: id
});
