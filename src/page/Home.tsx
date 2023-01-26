import React from "react";
import PaginationC from "../components/Pagination";

const Home = () => {
  return (
    <div>
      <PaginationC />
      <footer style={{margin:"5rem 0",padding:"2rem 0"}} className="container shadow center">
        This is footer
      </footer>
    </div>
  );
};

export default Home;
