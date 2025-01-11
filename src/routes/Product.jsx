import { useRouteLoaderData } from "react-router";

export async function loader({ params }) {
  const response = await fetch(
    "https://react-e-commerce-4eab9-default-rtdb.asia-southeast1.firebasedatabase.app/products.json",
  );

  const availableProducts = await response.json();
  const productId = params.productId;
  const product = availableProducts.find((prod) => prod.id === productId);

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
