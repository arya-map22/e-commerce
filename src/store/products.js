import { createSlice, createSelector } from "@reduxjs/toolkit";

import { selectProducts } from "./main";

const initialState = {
  products: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
  },
});

export const selectAvailableProducts = createSelector(
  [selectProducts],
  (productsState) => productsState.products,
);

export const selectProductById = createSelector(
  [selectAvailableProducts, (state, { productId }) => productId],
  (availableProducts, productId) =>
    availableProducts.find((product) => product.id === productId),
);

export const productsActions = productsSlice.actions;

export default productsSlice;
