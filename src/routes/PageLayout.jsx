import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useLoaderData, useLocation } from "react-router";

import { productsActions } from "../store/products";
import { cartActions } from "../store/cart";

import MainNavigation from "../components/MainNavigation";

export async function loader() {
  const response = await fetch(
    "https://react-e-commerce-4eab9-default-rtdb.asia-southeast1.firebasedatabase.app/products.json",
  );
  const products = await response.json();
  localStorage.setItem("products", JSON.stringify(products));

  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  console.log(cart);

  return { products, cart };
}

export default function PageLayout() {
  const loaderData = useLoaderData();
  const dispatch = useDispatch();
  const location = useLocation();

  // Set initial products data
  useEffect(() => {
    dispatch(productsActions.setProducts({ products: loaderData.products }));
  }, [dispatch, loaderData.products]);

  // Set initial cart data
  useEffect(() => {
    dispatch(cartActions.setCart({ cart: loaderData.cart }));
  }, [dispatch, loaderData.cart]);

  // Reset scroll position whenever page changes
  useEffect(() => {
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <>
      <MainNavigation />
      <main className="flex flex-col items-center">
        <Outlet />
      </main>
    </>
  );
}
