import { configureStore } from "@reduxjs/toolkit";

import apiSlice from "./apiSlice";
import cartSlice from "./cart";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export function selectCart(state) {
  return state.cart;
}

export default store;
