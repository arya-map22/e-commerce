import { useParams } from "react-router";
import { useSelector } from "react-redux";

import { currencyFormatter } from "../utils/currency";
import { selectProductById } from "../store/products";

import AddToCartButton from "../components/UI/AddToCartButton";

export default function ProductPage() {
  console.log("PRODUCT PAGE RENDERING");
  const params = useParams();
  const product = useSelector((state) =>
    selectProductById(state, { productId: params.productId }),
  );

  const {
    title = null,
    image = null,
    price = null,
    description = null,
  } = product || {};

  return (
    <section className="w-2/3 md:w-[500px]">
      <h2 className="mb-2 text-center">{title}</h2>
      <div className="mx-auto mb-8 h-80 w-fit rounded-md border-2 border-solid border-blue/20 p-2">
        <img className="h-full w-auto" src={image} alt={title} />
      </div>
      <div className="mb-4 flex w-full items-center justify-center gap-36">
        <h3>{currencyFormatter.format(price)}</h3>
        <AddToCartButton product={product} />
      </div>
      <h3 className="pl-2">Description</h3>
      <p className="text-justify">
        &nbsp;&nbsp;&nbsp;&nbsp;{/* Indent paragraph */}
        {description}
      </p>
    </section>
  );
}
