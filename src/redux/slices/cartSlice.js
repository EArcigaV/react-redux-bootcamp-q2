import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  productQty: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
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
    updateProdTotal: (state, action) => {
      const index = state.products.findIndex(
        (product) => product.id === action.payload.productId
      );
      state.products[index] = {
        ...state.products[index],
        quantity: action.payload.quantity,
      };
    },
  },
});

export const { add, remove, reset, updateProdTotal } = cartSlice.actions;

export const selectProducts = (state) => state.cart.products;

export default cartSlice.reducer;
