import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouteLoaderData } from "react-router";

import { productsActions, selectAvailableProducts } from "../store/products";

import Product from "../components/Product";

export async function loader() {
  const response = await fetch(
    "https://react-e-commerce-4eab9-default-rtdb.asia-southeast1.firebasedatabase.app/products.json",
  );
  const products = await response.json();
  localStorage.setItem("products", JSON.stringify(products));

  return products;
}

export default function HomePage() {
  const productsData = useRouteLoaderData("root");
  const products = useSelector(selectAvailableProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productsActions.setProducts({ products: productsData }));
  }, [dispatch, productsData]);

  return (
    <>
      <h1>React E-Commerce</h1>
      <section className="m-2 flex flex-wrap justify-center gap-4 p-2">
        {products.map((product) => (
          <Product key={product.id} productItem={product} />
        ))}
      </section>
    </>
  );
}
