import { createBrowserRouter } from "react-router";

import PageLayout from "./PageLayout";
import HomePage from "./Home";

import { loader as productsLoader } from "./Home";

const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    element: <PageLayout />,
    loader: productsLoader,
    children: [{ index: true, element: <HomePage /> }],
  },
]);

export default router;
