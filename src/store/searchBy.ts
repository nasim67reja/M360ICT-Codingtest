import { createSlice } from "@reduxjs/toolkit";

const initialSearchState = {
  search: null,
};

const searchSlice = createSlice({
  name: "currentSearch",
  initialState: initialSearchState,
  reducers: {
    storeSearch(state, action) {
      state.search = action.payload;
    },
  },
});

export const searchActions = searchSlice.actions;

export default searchSlice.reducer;