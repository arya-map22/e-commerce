import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";

import apiSlice from "./api";

const productsAdapter = createEntityAdapter();

const initialState = productsAdapter.getInitialState();

const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getAvailableProducts: build.query({
      query: () => "/products.json",

      transformResponse: (response) =>
        productsAdapter.setAll(initialState, response || []),

      providesTags: (transformedResponse) => [
        "products",
        transformedResponse.ids.map((id) => ({ type: "products", id })),
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
  (productEntities, productId) =>
    productEntities ? productEntities[productId] : null,
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
  (productEntities) => (productEntities ? Object.values(productEntities) : []),
);

export function useAvailableProducts() {
  return useGetAvailableProductsQuery(undefined, {
    selectFromResult: (queryResult) => ({
      ...queryResult,
      data: selectAvailableProductsFromQueryResult(queryResult),
    }),
  });
}
