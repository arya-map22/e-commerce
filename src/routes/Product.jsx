import { useParams } from "react-router";
import { useSelector } from "react-redux";

import { selectProductById } from "../store/products.js";

export default function ProductPage() {
  const params = useParams();
  const product = useSelector((state) =>
    selectProductById(state, { productId: params.productId }),
  );
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
