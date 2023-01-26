import React from "react";
import PaginationC from "../components/Pagination";
import FilterBy from "../components/FilterBy";

const Home = () => {
  return (
    <div>
      <FilterBy />
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
