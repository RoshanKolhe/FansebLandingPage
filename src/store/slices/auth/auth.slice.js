import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ACCESS_TOKEN } from "../../../utils/constant";
import { removeAccessToken } from "../../../utils/global/auth.global";
import {
  signInWithEmail,
  forgotPassword,
  signUpWithMobile,
  verifyOtpHandler,
} from "./auth.thunk";

function local() {
  if (typeof window !== "undefined") {
    return localStorage.getItem(ACCESS_TOKEN);
  }
}
const INIT_STATE = {
  isLoggedIn: local() != undefined ? true : false,
  isLoading: false,
};

export const loginByEmailAsyncThunk = createAsyncThunk(
  "emailLogin",
  signInWithEmail
);
export const forgotPasswordAsycnThunk = createAsyncThunk(
  "forgotPassword",
  forgotPassword
);

export const mobileLoginAsyncThunk = createAsyncThunk(
  "mobileLogin",
  signUpWithMobile
);
export const verifyOtpAsyncThunk = createAsyncThunk(
  "verifyOtp",
  verifyOtpHandler
);
const initSlice = createSlice({
  name: "auth",
  initialState: INIT_STATE,
  reducers: {
    logout: (state) => {
      removeAccessToken();
      state.isLoggedIn = false;
      return state;
    },
    setUserAsLogin: (state) => {
      state.isLoggedIn = true;
      return state;
    },
    startLoader: (state) => {
      state.isLoading = true;
      return state;
    },
    stopLoader: (state) => {
      state.isLoading = false;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginByEmailAsyncThunk.pending, (state) => {
        state.isLoading = true;
        return state;
      })
      .addCase(loginByEmailAsyncThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        return state;
      })
      .addCase(loginByEmailAsyncThunk.rejected, (state) => {
        state.isLoading = false;
        return state;
      })
      .addCase(forgotPasswordAsycnThunk.fulfilled, (state) => {
        state.isLoading = false;
        return state;
      })
      .addCase(forgotPasswordAsycnThunk.pending, (state) => {
        state.isLoading = true;
        return state;
      })
      .addCase(forgotPasswordAsycnThunk.rejected, (state) => {
        state.isLoading = false;
        return state;
      })
      .addCase(mobileLoginAsyncThunk.fulfilled, (state) => {
        state.isLoading = false;
        return state;
      })
      .addCase(mobileLoginAsyncThunk.pending, (state) => {
        state.isLoading = true;
        return state;
      })
      .addCase(mobileLoginAsyncThunk.rejected, (state) => {
        state.isLoading = false;
        return state;
      })
      .addCase(verifyOtpAsyncThunk.fulfilled, (state) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        return state;
      })
      .addCase(verifyOtpAsyncThunk.pending, (state) => {
        state.isLoading = true;
        return state;
      })
      .addCase(verifyOtpAsyncThunk.rejected, (state) => {
        state.isLoading = false;
        return state;
      });
  },
});

export const { logout, setUserAsLogin, startLoader, stopLoader } =
  initSlice.actions;

export default initSlice.reducer;
