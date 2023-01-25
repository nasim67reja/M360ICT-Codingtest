import { configureStore } from "@reduxjs/toolkit";
import { flightApi } from "./services/flightApi";

export const store = configureStore({
  reducer: {
    [flightApi.reducerPath]: flightApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(flightApi.middleware),
});
