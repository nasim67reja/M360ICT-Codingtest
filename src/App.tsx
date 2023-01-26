import React from "react";
import { Routes,Route } from "react-router";

// import { useGetFlightsQuery } from "./services/flightApi";
// import { useGetFlightByNumberQuery } from "./services/flightApi";
import Test from "./components/test";
import Home from "./page/Home";
import SingleLaunch from "./page/SingleLaunch";
import Navbar from "./components/Navbar";

function App() {
  // const { data, error, isLoading } = useGetFlightsQuery();
  // const { data,error, isLoading } = useGetFlightByNumberQuery(1);
  // console.log(data);

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/single" element={<SingleLaunch/>}/>

    {/* <div className="App">
      <Test />
    </div> */}
    </Routes>
    </>
  );
}

export default App;
