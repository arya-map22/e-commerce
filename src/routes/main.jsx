import { createBrowserRouter } from "react-router";

import PageLayout from "./PageLayout";
import HomePage from "./Home";

import { loader as productsLoader } from "./Home";
import ProductPage from "./Product";

const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    element: <PageLayout />,
    loader: productsLoader,
    children: [
      { index: true, element: <HomePage /> },
      { path: ":productId", element: <ProductPage /> },
    ],
  },
]);

export default router;
