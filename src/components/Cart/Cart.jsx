import { useState, useEffect } from "react";
import { useLocation } from "react-router";

import { useUserCart } from "../../store/cart";

import CartIcon from "./CartIcon";
import CartList from "./CartList";

export default function Cart() {
  const [cartIsVisible, setCartIsVisible] = useState(false);
  const location = useLocation();

  const {
    data: { userCart, itemsAmount },
  } = useUserCart();

  function handleToggleShowCart() {
    setCartIsVisible((prevState) => !prevState);
  }

  // Hide CartList whenever user visits another page
  useEffect(() => {
    setCartIsVisible(false);
  }, [location.pathname]);

  return (
    <div className="relative ml-3">
      <CartIcon onClick={handleToggleShowCart} itemsAmount={itemsAmount} />
      {cartIsVisible && <CartList cart={userCart} itemsAmount={itemsAmount} />}
    </div>
  );
}
