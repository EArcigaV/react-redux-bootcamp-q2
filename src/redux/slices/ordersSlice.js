import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const URL = "https://6x8prpit9f.execute-api.us-east-1.amazonaws.com/api/orders";

export const getOrders = createAsyncThunk(
  "orders/getOrders",

  async (_, { signal, rejectWithValue, requestId }) => {
    try {
      //throw "Bad Request! 🚫";
      const response = await fetch(
        `${URL}`,
        {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
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
      console.log("psS", data);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const ordersSlice = createSlice({
  name: "order",
  initialState: {
    order: [],
    loading: false, // Boolean
    // loading: "idle", //'idle' | 'pending' | 'succeeded' | 'failed'
    error: null,
  },
  extraReducers: (builder) => {
    builder
      // Fetch Products
      .addCase(getOrders.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload.map((order) => ({
          ...order,
          // likeCount: 0,
          // dislikeCount: 0,
          order,
        }));
      })
      .addCase(getOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const selectOrder = (state) => state.order;
export const selectOrderLoading = (state) => state.order.loading;
export const selectOrderError = (state) => state.order.error;

export default ordersSlice.reducer;
