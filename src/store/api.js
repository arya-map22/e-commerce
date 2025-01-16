import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://react-e-commerce-4eab9-default-rtdb.asia-southeast1.firebasedatabase.app",
  }),
  reducerPath: "api",
  endpoints: () => ({}),
  tagTypes: ["products", "cart"],
});

export default apiSlice;
