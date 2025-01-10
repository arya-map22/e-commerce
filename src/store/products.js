import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    }
  },
});

export const productsActions = productsSlice.actions;

export function fetchProducts() {
  return async (dispatch) => {
    const response = await fetch("https://react-e-commerce-4eab9-default-rtdb.asia-southeast1.firebasedatabase.app/products.json");
    const resData = await response.json();
    dispatch(productsActions.setProducts(resData));
  }
}

export default productsSlice;