import { useAddProductToCart } from "../../store/cart";

export default function AddToCartButton({ product }) {
  const [addToCart, { isFetching }] = useAddProductToCart(product);

  function handleAddToCart(event) {
    event.stopPropagation();
    addToCart();
  }

  return (
    <button
      className="rounded-md border-2 border-solid border-blue p-1 text-sm hover:bg-blue hover:text-white active:bg-dark-blue"
      onClick={handleAddToCart}
      disabled={isFetching}
    >
      {isFetching ? "Adding Product" : "Add to Cart"}
    </button>
  );
}
