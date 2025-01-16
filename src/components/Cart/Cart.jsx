import { useState, useEffect } from "react";
import { useLocation } from "react-router";

import { useUserCart } from "../../store/cart";

import CartIcon from "./CartIcon";
import CartList from "./CartList";

export default function Cart() {
  const [cartIsVisible, setCartIsVisible] = useState(false);
  const location = useLocation();

  const { data, isFetching, isSuccess } = useUserCart();

  function handleToggleShowCart() {
    setCartIsVisible((prevState) => !prevState);
  }

  // Hide CartList whenever user visits another page
  useEffect(() => {
    setCartIsVisible(false);
  }, [location.pathname]);

  let userCart;
  let itemsAmount;
  if (isFetching) {
    userCart = [];
    itemsAmount = 0;
  } else if (isSuccess) {
    userCart = data.userCart;
    itemsAmount = data.itemsAmount;
  }

  return (
    <div className="relative ml-3">
      <CartIcon onClick={handleToggleShowCart} itemsAmount={itemsAmount} />
      {cartIsVisible && <CartList cart={userCart} itemsAmount={itemsAmount} />}
    </div>
  );
}
