import { useRouteLoaderData } from "react-router";

import { currencyFormatter } from "../utils/currency";

export async function loader({ params }) {
  const products = JSON.parse(localStorage.getItem("products"));
  const product = products.find((prod) => prod.id === params.productId);

  return product;
}

export default function ProductPage() {
  const product = useRouteLoaderData("product-detail");

  return (
    <section className="w-2/3 md:w-[500px]">
      <h2 className="mb-2 text-center">{product.title}</h2>
      <div className="mx-auto mb-8 h-80 w-fit rounded-md border-2 border-solid border-blue/20 p-2">
        <img
          className="h-full w-auto"
          src={product.image}
          alt={product.title}
        />
      </div>
      <div className="mb-4 flex w-full items-center justify-center gap-36">
        <h3>{currencyFormatter.format(product.price)}</h3>
        <button className="rounded-md border-2 border-solid border-blue p-1 text-sm hover:bg-blue hover:text-white active:bg-dark-blue">
          Add to Cart
        </button>
      </div>
      <h3 className="pl-2">Description</h3>
      <p className="text-justify">
        &nbsp;&nbsp;&nbsp;&nbsp;{/* Indent paragraph */}
        {product.description}
      </p>
    </section>
  );
}
