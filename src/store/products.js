import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";

import apiSlice from "./apiSlice";

const productsAdapter = createEntityAdapter();

const initialState = productsAdapter.getInitialState();

const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getAvailableProducts: build.query({
      query: () => "/products.json",

      transformResponse: (response = []) =>
        productsAdapter.setAll(initialState, response),

      providesTags: (response = initialState) => [
        "products",
        Object.keys(response.entities).map((id) => ({ type: "products", id })),
      ],
    }),
  }),
});

const { useGetAvailableProductsQuery } = productsApiSlice;

const selectProductByIdFromQueryResult = createSelector(
  [
    (queryResult) => queryResult.data?.entities,
    (queryResult, productId) => productId,
  ],
  (products, productId) => (products ? products[productId] : null),
);

export function useProductFromId(productId) {
  return useGetAvailableProductsQuery(undefined, {
    selectFromResult: (queryResult) => ({
      ...queryResult,
      data: selectProductByIdFromQueryResult(queryResult, productId),
    }),
  });
}

const selectAvailableProductsFromQueryResult = createSelector(
  [(queryResult) => queryResult.data?.entities],
  (products) =>
    products
      ? Object.entries(products).map(([id, prod]) => ({ id, ...prod }))
      : null,
);

export function useAvailableProducts() {
  return useGetAvailableProductsQuery(undefined, {
    selectFromResult: (queryResult) => ({
      ...queryResult,
      data: selectAvailableProductsFromQueryResult(queryResult),
    }),
  });
}
