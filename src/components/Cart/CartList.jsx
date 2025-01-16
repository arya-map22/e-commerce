import CartItem from "./CartItem";

export default function CartList({ cart, itemsAmount }) {
  return (
    <ul className="absolute right-0 mt-1.5 flex max-h-80 w-80 flex-col items-start overflow-scroll rounded-sm border-2 border-solid border-blue/70 border-t-transparent bg-light-beige pt-0 shadow-md shadow-black/20">
      {itemsAmount === 0 && (
        <li>
          <p className="text-sm text-black">
            {"You dont have any item in cart."}
          </p>
        </li>
      )}
      {itemsAmount > 0 &&
        cart.map((item) => <CartItem key={item.id} item={item} />)}
    </ul>
  );
}
