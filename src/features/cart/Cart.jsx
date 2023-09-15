import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { clearCart } from "./cartSlice";

function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  return (
    <div className="mx-auto w-[80%] max-w-[80%] px-4 py-3">
      <Link to="/shop/1">&larr; Back to shop</Link>

      <h2 className="mt-7 text-xl font-semibold">Here is your cart:</h2>

      <ul className="mt-3 divide-y divide-slate-200 border-b">
        {cart.map((product) => (
          <CartItem product={product} key={product.id} />
        ))}
      </ul>

      <div className="mt-6 flex justify-center gap-2 space-x-2">
        <Link
          to="https://youtu.be/jq4Ps5IIMfc?si=2xFIkCp2shP6Q8tR"
          className="flex items-center justify-center rounded-full bg-sky-300 px-1.5 py-1"
        >
          Order now
        </Link>
        <button
          onClick={() => dispatch(clearCart())}
          className="flex items-center justify-center rounded-full bg-sky-300 px-1.5 py-1"
        >
          Clear cart
        </button>
      </div>
    </div>
  );
}

export default Cart;
