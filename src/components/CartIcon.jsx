import cartIcon from "../assets/cart.svg";

export default function CartIcon() {
  return (
    <li>
      <img className="h-auto w-12" src={cartIcon} alt="Cart Icon" />
    </li>
  );
}
