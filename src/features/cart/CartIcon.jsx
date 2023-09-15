import { useSelector } from "react-redux";
import { ReactComponent as CartSVG } from "./cart.svg";
import { useNavigate } from "react-router-dom";

function CartIcon() {
  const items = useSelector((state) => state.cart.cart);
  const navigate = useNavigate();

  function goToCart() {
    navigate("/cart");
  }

  return (
    <div className="relative flex hover:cursor-pointer" onClick={goToCart}>
      <CartSVG />
      <div className="absolute right-5 top-2 rounded-full bg-white px-1 text-[10px]">
        {items.length}
      </div>
    </div>
  );
}

export default CartIcon;
