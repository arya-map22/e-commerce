import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { productsSelector } from "../store/selectors";
import { fetchProducts } from "../store/products";

import Product from "../components/Product";

export default function HomePage() {
  const { products } = useSelector(productsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <main className="text-center">
      <h1>React E-Commerce</h1>
      <section className="m-2 flex flex-wrap justify-center gap-4 p-2">
        {products.map((product) => (
          <Product
            key={product.id}
            title={product.title}
            image={product.image}
            description={product.description}
            price={product.price}
          />
        ))}
      </section>
    </main>
  );
}
