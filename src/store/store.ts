import { configureStore } from "@reduxjs/toolkit";
import { flightApi } from "../services/flightApi";
import filterReducer from './filterBy'

export const store = configureStore({
  reducer: {
    [flightApi.reducerPath]: flightApi.reducer,
    filter:filterReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(flightApi.middleware),
});
