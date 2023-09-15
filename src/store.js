import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cart/cartSlice";
import shopSlice from "./features/shop/ShopSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    shop: shopSlice,
  },
});

export default store;
