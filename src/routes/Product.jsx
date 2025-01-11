import { useRouteLoaderData } from "react-router";

export async function loader({ params }) {
  const products = JSON.parse(localStorage.getItem("products"));
  const product = products.find((prod) => prod.id === params.productId);

  return product;
}

export default function ProductPage() {
  const product = useRouteLoaderData("product-detail");

  return (
    <section>
      <h2>{product.title}</h2>
      <div>
        <img src={product.image} alt={product.image} />
      </div>
      <div>
        <h3>{product.price}</h3>
        <button>Add to Cart</button>
      </div>
      <h3>Description</h3>
      <p>{product.description}</p>
    </section>
  );
}
