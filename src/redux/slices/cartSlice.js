import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
  },
  reducers: {
    add: (state, action) => {
      state.products.push(action.payload.product);
    },
    remove: (state, action) => {
      const index = state.products.findIndex(
        (product) => product.id === action.payload.productId
      );
      state.products.splice(index, 1);
    },

    reset: (state, action) => {
      state.products = [];
    },
  },
});

export const { add, remove, reset } = cartSlice.actions;

export const selectProducts = (state) => state.cart.products;

export default cartSlice.reducer;
