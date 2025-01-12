import { currencyFormatter } from "../../utils/currency";

export default function CartItem({ item }) {
  const { image, price, quantity, title } = item;
  return (
    <li className="border-b-solid flex w-full items-center border-b-2 border-b-blue/20 p-2 text-center text-black last:border-transparent">
      <img className="h-auto w-1/4" src={image} alt={title} />
      <h4 className="w-1/2 text-sm font-semibold">{title}</h4>
      <div className="w-1/4 text-sm">
        <p>{quantity} pcs</p>
        <p>{currencyFormatter.format(price)}</p>
      </div>
    </li>
  );
}
