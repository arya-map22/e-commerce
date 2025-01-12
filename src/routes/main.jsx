import { createBrowserRouter } from "react-router";

import PageLayout from "./PageLayout";
import HomePage from "./Home";
import ProductPage from "./Product";

import { loader as rootLoader } from "./PageLayout";
import { loader as productLoader } from "./Product";

const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    element: <PageLayout />,
    loader: rootLoader,
    children: [
      { index: true, element: <HomePage /> },
      {
        id: "product-detail",
        path: ":productId",
        element: <ProductPage />,
        loader: productLoader,
      },
    ],
  },
]);

export default router;
