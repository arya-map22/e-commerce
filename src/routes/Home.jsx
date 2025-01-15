// import { useSelector } from "react-redux";

// import { selectAvailableProducts } from "../store/products";

import { useGetAvailableProductsQuery } from "../store/products";

import Product from "../components/Product";
import Loading from "../components/UI/Loading";

export default function HomePage() {
  console.log("HOME RENDERING");
  const {
    data: products,
    isFetching,
    isSuccess,
  } = useGetAvailableProductsQuery();

  let content;
  if (isFetching) {
    content = <Loading />;
  } else if (isSuccess) {
    content = products.map((product) => (
      <Product key={product.id} product={product} />
    ));
  }

  return (
    <>
      <h1>React E-Commerce</h1>
      <section className="m-2 flex flex-wrap justify-center gap-4 p-2">
        {/* {products.map((product) => (
          <Product key={product.id} productItem={product} />
        ))} */}
        {content}
      </section>
    </>
  );
}
