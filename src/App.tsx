import React from "react";

import { useGetFlightsQuery } from "./services/flightApi";
import { useGetFlightByNumberQuery } from "./services/flightApi";

function App() {
  // const { data, error, isLoading } = useGetFlightsQuery();
  // const { data,error, isLoading } = useGetFlightByNumberQuery(1);
  // console.log(data);
  return <div className="App">Hello world</div>;
}

export default App;
