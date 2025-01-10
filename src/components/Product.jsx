import { currencyFormatter } from "../utils/currency";

import Button from "./UI/Button";

export default function Product({ title, image, description, price }) {
  return (
    <article className="flex h-80 w-80 flex-col flex-nowrap items-center gap-2 rounded-sm border-2 border-solid border-beige p-2">
      <h2>{title}</h2>
      <div className="h-36 w-auto">
        <img src={image} alt={title} className="h-full w-full" />
      </div>
      <p className="h-20 overflow-scroll p-2 text-justify">{description}</p>
      <div className="flex w-full px-2 justify-between items-center">
        <h3>{currencyFormatter.format(price)}</h3>
        <Button>Add to Cart</Button>
      </div>
    </article>
  );
}
