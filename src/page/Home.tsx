import React from "react";

import PaginationC from "../components/Pagination";
import FilterBy from "../components/FilterBy";
import Searching from "../components/Searching";
import FooterC from "../components/Footer";

const Home = () => {
  return (
    <div>
      <div className="container flex justify-between my-2">
        <Searching />
        <FilterBy />
      </div>
      <PaginationC />
      <FooterC />
    </div>
  );
};

export default Home;
