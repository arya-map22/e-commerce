import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";

import apiSlice from "./api";

const cartAdapter = createEntityAdapter();

const initialState = cartAdapter.getInitialState();

const cartApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getUserCart: build.query({
      query: () => "/cart.json",

      transformResponse: (response) =>
        cartAdapter.setAll(initialState, response || []),

      providesTags: (response) => [
        "cart",
        ...Object.keys(response.entities || []).map((id) => ({
          type: "cart",
          id,
        })),
      ],
    }),

    updateCart: build.mutation({
      query: (req) => ({
        url: "/cart.json",
        method: "PUT",
        body: req.body,
      }),

      invalidatesTags: (arg) => [{ type: "cart", id: arg.id }],
    }),
  }),
});

const { useUpdateCartMutation, useGetUserCartQuery } = cartApiSlice;

const selectUserCartFromQueryResult = createSelector(
  [(queryResult) => queryResult.data?.entities],
  (cartEntities) => {
    if (cartEntities) {
      const userCart = Object.entries(cartEntities).map(([id, item]) => ({
        id,
        ...item,
      }));
      const itemsAmount = userCart.reduce(
        (itemsAmount, item) => itemsAmount + item.quantity,
        0,
      );
      return { userCart, itemsAmount };
    }

    return { userCart: [], itemsAmount: 0 };
  },
);

export function useUserCart() {
  return useGetUserCartQuery(undefined, {
    selectFromResult: (queryResult) => ({
      ...queryResult,
      data: selectUserCartFromQueryResult(queryResult),
    }),
  });
}

export function useAddProductToCart(product) {
  const [updateCart, ...useMutation] = useUpdateCartMutation();
  const {
    data: { userCart },
  } = useUserCart();

  const oldItemIndex = userCart.findIndex((item) => item.id === product.id);

  let newItem;
  if (oldItemIndex !== -1) {
    const oldItem = userCart[oldItemIndex];
    newItem = {
      ...oldItem,
      quantity: oldItem.quantity + 1,
    };
  } else {
    newItem = { ...product, quantity: 1 };
  }

  async function addItemToCart() {
    const newUserCart = [newItem, ...userCart];
    await updateCart({ id: newItem.id, body: newUserCart }).unwrap();
  }

  return [addItemToCart, ...useMutation];
}
