import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Flight } from "../models/flight.model";

export const flightApi = createApi({
  reducerPath: "flightApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.spacexdata.com/v3/launches",
  }),
  endpoints: (builder) => ({
    getFlights: builder.query<Flight[], void>({
      query: () => "/",
    }),
    getFlightByNumber: builder.query<Flight, number>({
      query: (id) => `/${id}`,
    }),
  }),
});
export const { useGetFlightsQuery } = flightApi;
export const { useGetFlightByNumberQuery } = flightApi;
