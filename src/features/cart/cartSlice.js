import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const isInCart = state.cart.findIndex(
        (productFromCart) => productFromCart.id === action.payload.id,
      );

      if (isInCart >= 0) {
        state.cart[isInCart]["quantity"]++;
        state.cart[isInCart]["totalPrice"] =
          state.cart[isInCart]["price"] * state.cart[isInCart]["quantity"];
      } else {
        state.cart.push({
          ...action.payload,
          quantity: 1,
          totalPrice: 1 * action.payload.price,
        });
      }
    },
    deleteFromCart(state, action) {
      const product = state.cart.find(
        (productFromCart) => productFromCart.id === action.payload,
      );

      if (product.quantity === 1) {
        state.cart = state.cart.filter(
          (productFromCart) => productFromCart.id !== action.payload,
        );
      } else {
        product.quantity--;
        product.totalPrice = product.totalPrice - product.price;
      }
    },
    clearCart(state, action) {
      state.cart = [];
    },
  },
});

export default cartSlice.reducer;

export const { addToCart, deleteFromCart, clearCart } = cartSlice.actions;
