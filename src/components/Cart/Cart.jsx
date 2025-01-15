import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";

import { selectUserCart, selectCartItemsAmount } from "../../store/cart";

import CartIcon from "./CartIcon";
import CartList from "./CartList";

export default function Cart() {
  const [cartIsVisible, setCartIsVisible] = useState(false);
  const location = useLocation();

  const itemsAmount = useSelector(selectCartItemsAmount);
  const cart = useSelector(selectUserCart);

  function handleToggleShowCart() {
    setCartIsVisible((prevState) => !prevState);
  }

  // Hide CartList whenever user visits another page
  useEffect(() => {
    setCartIsVisible(false);
  }, [location.pathname]);

  // Save cart data to localStorage whenever user add/remove item to cart
  useEffect(() => {
    async function saveCartToServer(cart) {
      await fetch(
        "https://react-e-commerce-4eab9-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(cart),
        },
      );
    }

    saveCartToServer(cart);
  }, [cart]);

  return (
    <div className="relative ml-3">
      <CartIcon onClick={handleToggleShowCart} itemsAmount={itemsAmount} />
      {cartIsVisible && <CartList cart={cart} itemsAmount={itemsAmount} />}
    </div>
  );
}
