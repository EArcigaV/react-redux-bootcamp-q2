import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
//import { update } from "./cartSlice";
//import MockProducts from "../../data/products.json";

const URL =
  "https://6x8prpit9f.execute-api.us-east-1.amazonaws.com/api/products";
//console.log(".env", process.env.REACT_APP_API_KEY);
// const wait = (ms = 3000) => new Promise((resolve) => setTimeout(resolve, ms));

export const getProducts = createAsyncThunk(
  "products/getProducts",
  // async (_, { signal, rejectWithValue, requestId }) => {
  //   try {
  //     const {
  //       data: { products },
  //     } = MockProducts;
  //     console.log("products", products);

  async (_, { signal, rejectWithValue, requestId }) => {
    // console.log({ requestId });
    try {
      //throw "Bad Request! 🚫";
      const response = await fetch(
        `${URL}`,
        {
          method: "GET", // *GET, POST, PUT, DELETE, etc.
          mode: "cors", // no-cors, *cors, same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          //credentials: "same-origin", // include, *same-origin, omit
          headers: {
            "Content-Type": "application/json",
            "x-api-key": process.env.REACT_APP_API_KEY,
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          //   redirect: "follow", // manual, *follow, error
          //   referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
          //   body: JSON.stringify(data), // body data type must match "Content-Type" header
        },
        { signal }
      );
      const data = await response.json();
      //await wait(5000);
      //console.log("psS", data);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    loading: false, // Boolean
    // loading: "idle", //'idle' | 'pending' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {
    add: (state, action) => {
      state.products.push(action.payload.product);
    },
    updateProductsLocal: (state, action) => {
      state.products = state.products.map((product) =>
        product.id === action.payload.id ? action.payload : product
      );
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch Products
      .addCase(getProducts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload.items.map((product) => ({
          ...product,
          // likeCount: 0,
          // dislikeCount: 0,
          product,
        }));
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { updateProductsLocal } = productsSlice.actions;

export const selectAllProducts = (state) => state.products;
export const selectProductsLoading = (state) => state.products.loading;
export const selectProductsError = (state) => state.products.error;

export default productsSlice.reducer;
