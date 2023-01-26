import { createSlice } from "@reduxjs/toolkit";

const initialFilterState = {
  filter: null,
};

const filterSlice = createSlice({
  name: "currentFilter",
  initialState: initialFilterState,
  reducers: {
    storeFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const filterActions = filterSlice.actions;

export default filterSlice.reducer;