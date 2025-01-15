import { useParams } from "react-router";

import { currencyFormatter } from "../utils/currency";
import { useProductFromId } from "../store/products";

import AddToCartButton from "../components/UI/AddToCartButton";
import Loading from "../components/UI/Loading";

export default function ProductPage() {
  const params = useParams();
  const {
    data: product,
    isFetching,
    isSuccess,
  } = useProductFromId(params.productId);

  let content;
  if (isFetching) {
    content = <Loading />;
  } else if (isSuccess && product) {
    content = (
      <>
        <h2 className="mb-2 text-center">{product.title}</h2>
        <div className="mx-auto mb-8 h-80 w-fit rounded-md border-2 border-solid border-blue/20 p-2">
          <img
            className="h-full w-auto"
            src={product.image}
            alt={product.title}
          />
        </div>
        <div className="mb-4 flex w-full items-center justify-center gap-36">
          <h3>{currencyFormatter.format(product.price)}</h3>
          <AddToCartButton product={product} />
        </div>
        <h3 className="pl-2">Description</h3>
        <p className="text-justify">
          &nbsp;&nbsp;&nbsp;&nbsp;{/* Indent paragraph */}
          {product.description}
        </p>
      </>
    );
  }

  return <section className="w-2/3 md:w-[500px]">{content}</section>;
}
