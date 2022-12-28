import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import {
  userAddressHandler,
  updatePasswordHandler,
  uploadProfileHandler,
  setUserProfileHandler,
  updateUserProfileHandler,
} from "./user.thunk";

const INIT_STATE = {
  userData: {},
  userAddress: {},
  error: null,
  clientUsers: [],
  userRoles: [],
  isApplicableForProjectCreation: false,
  isLoading: false,
  selectedTab: 0,
  userPassword: {},
  mobile: {
    countryCode: "",
    mobile_number: "",
  },
};

export const userAddressThunk = createAsyncThunk(
  "userAddress",
  userAddressHandler
);

export const updatePasswordThunk = createAsyncThunk(
  "updatePassword",
  updatePasswordHandler
);

export const uploadProfileThunk = createAsyncThunk(
  "uploadProfile",
  uploadProfileHandler
);
export const setUserProfileDetailsThunk = createAsyncThunk(
  "setUserProfile",
  setUserProfileHandler
);
export const uploadProfileInfoThunk = createAsyncThunk(
  "uploadProfileInfo",
  updateUserProfileHandler
);
const userSlice = createSlice({
  name: "user",
  initialState: INIT_STATE,
  reducers: {
    deleteUser: (state, action) => {
      var id = action.payload;
      var users = state.clientUsers.filter((project) => project.id !== id);
      state.clientUsers = users;
      return state;
    },
    setUserProfileDetails: (state, action) => {
      const userData = action.payload;
      if (userData.email_verify && userData.isMobileVerified) {
        state.isApplicableForProjectCreation = true;
      }
      state.userData.profile = userData;
      return state;
    },
    tabChange: (state, action) => {
      state.selectedTab = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userAddressThunk.fulfilled, (state, action) => {
        state.userAddress = action.payload;
        return state;
      })
      .addCase(updatePasswordThunk.fulfilled, (state, action) => {
        state.userPassword = action.payload;
        return state;
      })
      .addCase(uploadProfileThunk.pending, (state) => {
        state.isLoading = true;
        return state;
      })
      .addCase(uploadProfileThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userData.profile.imageUrl = action.payload?.url;
        return state;
      })
      .addCase(uploadProfileThunk.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(setUserProfileDetailsThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(setUserProfileDetailsThunk.fulfilled, (state, action) => {
        state = { ...state, ...action.payload };
        state.isLoading = false;
        return state;
      })
      .addCase(setUserProfileDetailsThunk.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(uploadProfileInfoThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(uploadProfileInfoThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state = { ...state, ...action.payload };
        // return { ...state, ...action.payload };
      })
      .addCase(uploadProfileInfoThunk.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { deleteUser, setUserProfileDetails, tabChange } =
  userSlice.actions;

export default userSlice.reducer;
