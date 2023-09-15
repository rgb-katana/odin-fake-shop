import { useEffect } from "react";
import AddDelete from "../ui/AddDelete";
import { shorten } from "../../utils/shorten";

function ShopItem({ product }) {
  return (
    <div className="grid h-full max-h-[330px] w-full max-w-[300px] grid-rows-[3fr_1fr_1fr_1fr] gap-2 self-center border border-sky-500 p-2">
      <div className="flex h-1/2 h-[150px] items-center justify-center">
        <img src={product.image} className="h-4/5 w-[100px] object-contain" />
      </div>
      <p className="text-center">{shorten(product.title)}</p>
      <p className="text-center">${product.price}</p>
      <AddDelete product={product} />
    </div>
  );
}

export default ShopItem;
