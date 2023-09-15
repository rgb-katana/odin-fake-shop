import { Link } from "react-router-dom";

function Pagination({ page }) {
  return (
    <div className="mb-4 flex items-center justify-center gap-2">
      <Link
        to="/shop/1"
        className={`${
          Number(page) == 1 ? "bg-sky-200" : ""
        } flex items-center justify-center rounded-full px-1.5`}
      >
        1
      </Link>
      <Link
        to="/shop/2"
        className={`${
          Number(page) == 2 ? "bg-sky-200" : ""
        } flex items-center justify-center rounded-full px-1.5`}
      >
        2
      </Link>
    </div>
  );
}

export default Pagination;
