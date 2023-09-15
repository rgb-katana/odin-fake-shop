import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./shopSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Pagination from "../pagination/Pagination";
import ShopItem from "./ShopItem";

function Shop() {
  const dispatch = useDispatch();
  const { page } = useParams();

  const begin = page === 1 ? 0 : (page - 1) * 10;
  const end = page * 10;

  const products = useSelector((state) => state.shop.products);

  useEffect(function () {
    dispatch(fetchProducts());
  }, []);

  return (
    <div>
      <div className="my-5 grid grid-cols-2 gap-2 px-2">
        {products.slice(begin, end).map((product) => (
          <ShopItem key={product.id} product={product} />
        ))}
      </div>
      <Pagination page={page} />
    </div>
  );
}

export default Shop;
