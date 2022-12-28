import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { removeAccessToken } from "../../../utils/global/auth.global";
import {
  getProductsBySearch,
  getAllProductsSlice,
  getProductDetailsByProductIDSlice,
} from "./product.thunk";

const INIT_STATE = {
  searched_products: [],
  product_details: {},
  isLoading: false,
};

export const getProductsBySearchThunk = createAsyncThunk(
  "getProductsBySearch",
  getProductsBySearch
);
export const getAllProductsThunk = createAsyncThunk(
  "getAllProducts",
  getAllProductsSlice
);

export const getProductDetailsByProductIDThunk = createAsyncThunk(
  "getProductDetailsByProductID",
  getProductDetailsByProductIDSlice
);

const productSlice = createSlice({
  name: "product",
  initialState: INIT_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductsBySearchThunk.pending, (state) => {
        state.isLoading = true;
        return state;
      })
      .addCase(getProductsBySearchThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.searched_products = action.payload;
        return state;
      })
      .addCase(getProductsBySearchThunk.rejected, (state) => {
        state.isLoading = false;
        return state;
      })
      .addCase(getAllProductsThunk.pending, (state) => {
        state.isLoading = true;
        return state;
      })
      .addCase(getAllProductsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.searched_products = action.payload;
        return state;
      })
      .addCase(getAllProductsThunk.rejected, (state) => {
        state.isLoading = false;
        return state;
      })
      .addCase(getProductDetailsByProductIDThunk.pending, (state) => {
        state.isLoading = true;
        return state;
      })
      .addCase(getProductDetailsByProductIDThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.product_details = action.payload;
        return state;
      })
      .addCase(getProductDetailsByProductIDThunk.rejected, (state) => {
        state.isLoading = false;
        return state;
      });
  },
});

// export const { logout, setUserAsLogin, startLoader, stopLoader } =
//   productSlice.actions;

export default productSlice.reducer;
