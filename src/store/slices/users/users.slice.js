import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createUserHandler,
  fetchAllUsersHandler,
  updateSubUserHandler,
  deleteSubUserHandler,
} from "./users.thunk";

const INIT_STATE = {
  allUsers: [],
  totalUsers: 0,
};

export const fetchAllSubUsersThunk = createAsyncThunk(
  "fetchAllRole",
  fetchAllUsersHandler
);

export const createSubUserThunk = createAsyncThunk(
  "createRole",
  createUserHandler
);

export const updateSubUserThunk = createAsyncThunk(
  "updateSubUser",
  updateSubUserHandler
);

export const deleteSubUserThunk = createAsyncThunk(
  "deleteSubUser",
  deleteSubUserHandler
);

const roleSlice = createSlice({
  name: "role",
  initialState: INIT_STATE,
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllSubUsersThunk.fulfilled, (state, action) => {
        state.allUsers = action.payload;
      })
      .addCase(createSubUserThunk.fulfilled, (state, action) => {
        state.allUsers.push(action.payload);
      })
      .addCase(deleteSubUserThunk.fulfilled, (state, action) => {
        var id = action.payload;
        var newData = state.allUsers.filter((data) => data.id !== id);
        state.allUsers = newData;
        return state;
      });
  },
});

export default roleSlice.reducer;
