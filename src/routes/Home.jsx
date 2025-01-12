import { useSelector } from "react-redux";

import { selectAvailableProducts } from "../store/products";

import Product from "../components/Product";

export default function HomePage() {
  const products = useSelector(selectAvailableProducts);

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
