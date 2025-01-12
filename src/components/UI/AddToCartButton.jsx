import { useDispatch } from "react-redux";

import { cartActions } from "../../store/cart";

export default function AddToCartButton({ product }) {
  const dispatch = useDispatch();

  function handleAddToCart(event) {
    event.stopPropagation();
    dispatch(cartActions.addItem({ item: product }));
  }

  return (
    <button
      className="rounded-md border-2 border-solid border-blue p-1 text-sm hover:bg-blue hover:text-white active:bg-dark-blue"
      onClick={handleAddToCart}
    >
      Add to Cart
    </button>
  );
}
