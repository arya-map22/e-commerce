import { useNavigate } from "react-router";

import { currencyFormatter } from "../utils/currency";
import AddToCartButton from "./UI/AddToCartButton";

export default function Product({ productItem }) {
  const navigate = useNavigate();
  const { id, title, image, description, price } = productItem;

  function handleProductClick() {
    navigate(id);
  }

  return (
    <article
      onClick={handleProductClick}
      className="flex h-80 w-80 flex-col flex-nowrap items-center gap-3 rounded-sm border-2 border-solid border-beige p-2 shadow-md shadow-blue/50 hover:cursor-pointer hover:shadow-lg hover:shadow-blue/70"
    >
      <h2>{title}</h2>
      <div className="h-32 w-auto">
        <img src={image} alt={title} className="h-full w-full" />
      </div>
      <p className="h-20 overflow-scroll p-2 text-justify">{description}</p>
      <div className="flex w-full items-center justify-between px-2">
        <h3 className="ml-2">{currencyFormatter.format(price)}</h3>
        <AddToCartButton product={productItem} />
      </div>
    </article>
  );
}
