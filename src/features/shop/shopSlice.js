import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  isLoading: false,
  error: "",
};

export const fetchProducts = createAsyncThunk(
  "shop/fetchProducts",
  async function () {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
  },
);

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error =
          "There was a problem fetching products. Try again next time :)";
      }),
});

export default shopSlice.reducer;
