import { configureStore } from "@reduxjs/toolkit";
import { flightApi } from "../services/flightApi";
import filterReducer from './filterBy'
import searchReducer from "./searchBy"

export const store = configureStore({
  reducer: {
    [flightApi.reducerPath]: flightApi.reducer,
    filter:filterReducer,
    search:searchReducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(flightApi.middleware),
});
