import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";

import { productsActions } from "../store/products";
import { cartActions } from "../store/cart";

import store from "../store/main";

import MainNavigation from "../components/MainNavigation";

async function fetchProducts() {
  const response = await fetch(
    "https://react-e-commerce-4eab9-default-rtdb.asia-southeast1.firebasedatabase.app/products.json",
  );
  const products = await response.json();
  localStorage.setItem("products", JSON.stringify(products));

  return products;
}

export async function loader() {
  const products = await fetchProducts();
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Initialize products and cart upon first page load
  store.dispatch(productsActions.setProducts(products));
  store.dispatch(cartActions.setCart(cart));

  return;
}

export default function PageLayout() {
  const location = useLocation();

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
