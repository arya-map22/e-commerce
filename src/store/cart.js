import { createSlice, createSelector } from "@reduxjs/toolkit";

import { selectCart } from "./main";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart(state, action) {
      state.cart = action.payload;
    },

    addItem(state, action) {
      const addedItem = action.payload;
      const selectedItem = state.cart.find((item) => item.id === addedItem.id);
      if (!selectedItem) {
        const newItem = { ...addedItem, quantity: 1 };
        state.cart.unshift(newItem);
      } else {
        selectedItem.quantity += 1;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export const selectUserCart = createSelector(
  [selectCart],
  (cartState) => cartState.cart,
);

export const selectCartItemsAmount = createSelector([selectUserCart], (cart) =>
  cart.reduce((totalAmount, item) => totalAmount + item.quantity, 0),
);

export default cartSlice;
