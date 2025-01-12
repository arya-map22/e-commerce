import { useState } from "react";
import { useSelector } from "react-redux";

import { selectUserCart, selectCartItemsAmount } from "../../store/cart";

import CartIcon from "./CartIcon";
import CartList from "./CartList";

export default function Cart() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const itemsAmount = useSelector(selectCartItemsAmount);
  const cart = useSelector(selectUserCart);

  function handleToggleShowCart() {
    setCartIsVisible((prevState) => !prevState);
  }

  return (
    <div className="relative ml-3">
      <CartIcon onClick={handleToggleShowCart} itemsAmount={itemsAmount} />
      {cartIsVisible && <CartList cart={cart} itemsAmount={itemsAmount} />}
    </div>
  );
}
