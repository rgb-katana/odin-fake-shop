import { Link } from "react-router-dom";
import CartIcon from "../cart/CartIcon";

function Header() {
  return (
    <div className="flex items-center justify-between bg-sky-500 p-2">
      <Link to="/">FAKE SHOP</Link>
      <CartIcon />
    </div>
  );
}

export default Header;
