import { configureStore } from "@reduxjs/toolkit";

import productsSlice from "./products";

const store = configureStore({
  reducer: {
    products: productsSlice.reducer 
  }
})

export function selectProducts(state) {
  return state.products;
}

export default store;