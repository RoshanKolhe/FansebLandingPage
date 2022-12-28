import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  allVendorServicesHandler,
  vendorBusinessAddressHandler,
  vendorNotesHandler,
  addNotesByIdHandler,
  fetchVendorViewPortfolioHandler,
  // fetchviewVendorNotesHandler,
} from "./viewProfile.thunk";

const INIT_STATE = {
  list: [],
  address: [],
  notes: [],
  viewPort: [],
};

export const allVendorServicesThunk = createAsyncThunk(
  "vendorServices",
  allVendorServicesHandler
);

// export const fetchviewVendorNotesThunk = createAsyncThunk(
//   "viewVendorNotes",
//   fetchviewVendorNotesHandler
// );

export const vendorBusinessAddressThunk = createAsyncThunk(
  "vendorBusinessAddress",
  vendorBusinessAddressHandler
);
export const fetchVendorViewPortfolioThunk = createAsyncThunk(
  "fetchVendorViewPortfolio",
  fetchVendorViewPortfolioHandler
);

export const vendorNotesThunk = createAsyncThunk(
  "vendorNotes",
  vendorNotesHandler
);

export const addNotesByIdThunk = createAsyncThunk(
  "addNotesById",
  addNotesByIdHandler
);
const listServicesSlice = createSlice({
  name: "vendorService",
  initialState: INIT_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(allVendorServicesThunk.fulfilled, (state, action) => {
        state.list = action.payload;
        return state;
      })
      .addCase(vendorBusinessAddressThunk.fulfilled, (state, action) => {
        state.address = action.payload;
        return state;
      })
      .addCase(vendorNotesThunk.fulfilled, (state, action) => {
        state.notes = action.payload;
        return state;
      })
      .addCase(fetchVendorViewPortfolioThunk.fulfilled, (state, action) => {
        state.viewPort = action.payload;
        return state;
      })
      // .addCase(fetchviewVendorNotesThunk.fulfilled, (state, action) => {
      //   state.viewNotes = action.payload;
      //   return state;
      // })
      .addCase(addNotesByIdThunk.fulfilled, (state, action) => {
        state.notes.push(action.payload);
        return state;
      });
  },
});

export default listServicesSlice.reducer;
