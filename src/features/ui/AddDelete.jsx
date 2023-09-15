import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../cart/cartSlice";

function AddDelete({ product }) {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  function handleAddToCart(e) {
    e.preventDefault();
    dispatch(addToCart(product));
  }

  function handleDeleteFromCart(e) {
    e.preventDefault();
    dispatch(deleteFromCart(product.id));
  }

  const isInCart = cart.find(
    (productFromCart) => productFromCart.id === product.id,
  );

  if (!isInCart) {
    return (
      <button
        onClick={handleAddToCart}
        className="flex items-center justify-center bg-sky-300"
      >
        Add to cart
      </button>
    );
  }

  return (
    <div className="flex items-center justify-center gap-2">
      <button
        onClick={handleAddToCart}
        className="flex items-center justify-center rounded-full bg-sky-300 px-1.5"
      >
        +
      </button>
      <button
        onClick={handleDeleteFromCart}
        className="flex items-center justify-center rounded-full bg-sky-300 px-1.5"
      >
        -
      </button>
    </div>
  );
}

export default AddDelete;
