import React from "react";

const Navbar = () => {
  return (
    <header className="header shadow">
      <div className="container">
        <div className="flex justify-between items-center">
          <h3>SpaceX Launch Tracker</h3>
          <div className="center gap-05">
            <span>
              <svg
              style={{height:"1.5rem"}}
                xmlns="http://www.w3.org/2000/svg"
                className="ionicon s-ion-icon"
                viewBox="0 0 512 512"
              >
                <title>Moon</title>
                <path
                  d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ionicon-fill-none ionicon-stroke-width"
                ></path>
              </svg>
            </span>
            <span>Dark Mode</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
