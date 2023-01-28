import React, { useState } from "react";
import { Pagination, Typography } from "antd";
import { useGetFlightsQuery } from "../services/flightApi";
import { Flight } from "../models/flight.model";
import { Card, Skeleton } from "antd";
import { useSelector } from "react-redux";
import CardC from "./Card";

// const PaginationC: React.FC = () => <Pagination onChange={onChange} total={50} />;

const { Meta } = Card;
const { Text } = Typography;

const PaginationC = () => {
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);

  const filterBy = useSelector((state: any) => state.filter.filter);

  const { data, isLoading, isSuccess, isError } = useGetFlightsQuery();

  const searchBy = useSelector((state: any) => state.search.search);

  const getFlight = (flight: Flight, time: number) => {
    const orderDate = new Date(flight.launch_date_utc);
    const dateNow = (Date.now() - orderDate.getTime()) / 86400000;
    return dateNow < time;
  };
  let arr: Flight[] = [];

  if (data !== undefined) {
    arr = data.filter((el) => {
      if (filterBy === true) return el.upcoming === true;
      else if (filterBy === "launch-fail") return el.launch_success === false;
      else if (filterBy === "launch-success") return el.launch_success === true;
      else if (filterBy === "all") return el;
      else if (filterBy === "last-week") {
        const fl = getFlight(el, 7);
        return fl;
      } else if (filterBy === "last-month") {
        const fl = getFlight(el, 30);
        return fl;
      } else if (filterBy === "last-year") {
        const fl = getFlight(el, 30);
        return fl;
      }
      return el;
    });

    if (searchBy !== null) {
      arr = arr.filter((el) => el.rocket.rocket_name === searchBy);
    }
  }

  return (
    <>
      <div className="container">
        <div style={{ minHeight: "100vh", marginTop: "5rem" }}>
          {isLoading && (
            <div className="grid grid-4-cols gap-205">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((num, i) => (
                <div key={i}>
                  <Skeleton.Image
                    style={{ marginBottom: "1rem" }}
                    active={true}
                  />
                  <Skeleton active paragraph={{ rows: 4 }} />
                </div>
              ))}
            </div>
          )}
          {isError && <div>Something went wrong</div>}
          {isSuccess && (
            <>
              {arr.length > 0 ? (
                <div className="grid grid-4-cols gap-205">
                  {arr
                    .slice((page - 1) * size, size * page)
                    .map((flight, i) => (
                      <CardC key={i} flight={flight} />
                    ))}
                </div>
              ) : (
                <div className="center" style={{ minHeight: "65vh" }}>
                  No Mission Found
                </div>
              )}
              <Pagination
                style={{
                  textAlign: "end",
                  marginTop: "1.5rem",
                  fontSize: "1rem",
                }}
                total={arr.length}
                pageSize={size}
                current={page}
                onChange={(page) => setPage(page)}
                onShowSizeChange={(current: number, size: number) =>
                  setSize(size)
                }
              />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default PaginationC;
