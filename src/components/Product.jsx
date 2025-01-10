import { currencyFormatter } from "../utils/currency";

export default function Product({ title, image, description, price }) {
  return (
    <article className="flex h-80 w-80 flex-col flex-nowrap items-center gap-3 rounded-sm border-2 border-solid border-beige p-2">
      <h2>{title}</h2>
      <div className="h-32 w-auto">
        <img src={image} alt={title} className="h-full w-full" />
      </div>
      <p className="h-20 overflow-scroll p-2 text-justify">{description}</p>
      <div className="flex w-full items-center justify-between px-2">
        <h3 className="ml-2">{currencyFormatter.format(price)}</h3>
        <button className="rounded-md border-2 border-solid border-blue p-1 text-sm hover:bg-blue hover:text-white active:bg-dark-blue">
          Add to Cart
        </button>
      </div>
    </article>
  );
}
