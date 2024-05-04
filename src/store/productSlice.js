import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import StatusCode from "./utils/StatusCode";

const initialState = {
  data: [],
  status: StatusCode.IDLE,
};

export const getProducts = createAsyncThunk("product/get", async () => {
  const { data } = await axios.get("https://fakestoreapi.com/products");
  const res = data;
  return data;
});

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // fetchProducts(state, action) {
    //   state.data = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state, action) => {
      state.status = StatusCode.LOADING;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = StatusCode.IDLE;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.status = StatusCode.ERROR;
    });
  },
});

export default productSlice.reducer;
export const { fetchProducts } = productSlice.actions;
