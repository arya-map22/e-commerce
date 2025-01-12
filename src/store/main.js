import { configureStore } from "@reduxjs/toolkit";

import productsSlice from "./products";
import cartSlice from "./cart";

const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export function selectProducts(state) {
  return state.products;
}

export function selectCart(state) {
  return state.cart;
}

export default store;
