import { useSelector } from "react-redux";
import AddDelete from "../ui/AddDelete";
import { formatCurrency } from "../../utils/helpers";

function CartItem({ product }) {
  const { id, title, quantity, totalPrice } = product;

  return (
    <li className="flex py-3 sm:items-center sm:justify-between">
      <p className="mb-1 mr-2 sm:mb-0">
        {quantity} &times; {title}
      </p>
      <div className="ml-auto flex items-center justify-between gap-2 sm:gap-6">
        <div className="flex flex-col items-center justify-center text-sm font-bold">
          <p>total:</p>
          <p>{formatCurrency(totalPrice)}</p>
        </div>
        <AddDelete product={product} />
      </div>
    </li>
  );
}

export default CartItem;
