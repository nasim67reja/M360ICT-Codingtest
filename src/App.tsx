import React from "react";
import { Routes, Route } from "react-router";

import Home from "./page/Home";
import SingleLaunch from "./page/SingleLaunch";

import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/single" element={<SingleLaunch />} />
      </Routes>
    </>
  );
}

export default App;
