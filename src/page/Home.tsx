import React from "react";

import PaginationC from "../components/Pagination";
import FilterBy from "../components/FilterBy";
import Searching from "../components/Searching";

const Home = () => {
  return (
    <div>
      <div className="container flex justify-between my-2">
        <Searching />
        <FilterBy />
      </div>
      <PaginationC />
      <footer className="shadow">
        <div
          style={{ margin: "5rem 0", padding: "2rem 0" }}
          className="container  center"
        >
          This is footer
        </div>
      </footer>
    </div>
  );
};

export default Home;
