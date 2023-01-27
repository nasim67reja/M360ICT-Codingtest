import React from "react";

import PaginationC from "../components/Pagination";
import FilterBy from "../components/FilterBy";
import Searching from "../components/Searching";

const Home = () => {
  return (
    <div className="container">
      <div className="flex justify-between" style={{ margin: "4rem 0" }}>
        <Searching />
        <FilterBy />
      </div>
      <PaginationC />
      <footer>
        <div
          style={{ margin: "5rem 0", padding: "2rem 0" }}
          className="container shadow center"
        >
          This is footer
        </div>
      </footer>
    </div>
  );
};

export default Home;
