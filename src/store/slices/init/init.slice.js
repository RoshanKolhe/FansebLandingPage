import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import {
  checkTokenValidity,
  fetchAllNotificationsHandler,
  fetchAllUserPermissionsHandler,
  markAllNotificationsAsReadHandler,
} from "./init.thunk";

const INIT_STATE = {
  isInitAuthCheckedDone: false,
  notifications: {},
  permissions: {},
  options: [],
};

export const checkForTokenValidityAsyncThunk = createAsyncThunk(
  "checkTokenValidity",
  checkTokenValidity
);

export const fetchAllUserPermissionsThunk = createAsyncThunk(
  "fetchAllUserPermissions",
  fetchAllUserPermissionsHandler
);

export const fetchAllNotificationsThunk = createAsyncThunk(
  "fetchAllNotifications",
  fetchAllNotificationsHandler
);

export const markAllNotificationsAsReadThunk = createAsyncThunk(
  "markAllNotificationsAsRead",
  markAllNotificationsAsReadHandler
);

const initSlice = createSlice({
  name: "init",
  initialState: INIT_STATE,
  reducers: {
    setPemissionOptions: (state, action) => {
      state.options = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkForTokenValidityAsyncThunk.fulfilled, (state) => {
        state.isInitAuthCheckedDone = true;
        return state;
      })
      .addCase(checkForTokenValidityAsyncThunk.rejected, (state) => {
        state.isInitAuthCheckedDone = true;
        return state;
      })
      .addCase(fetchAllNotificationsThunk.fulfilled, (state, action) => {
        state.notifications = action.payload;
        return state;
      })
      .addCase(fetchAllNotificationsThunk.rejected, (state) => {
        state.notifications = [];
        return state;
      })
      .addCase(fetchAllUserPermissionsThunk.fulfilled, (state, action) => {
        state.permissions = action.payload;
        return state;
      });
  },
});

export const { setPemissionOptions } = initSlice.actions;

export default initSlice.reducer;
