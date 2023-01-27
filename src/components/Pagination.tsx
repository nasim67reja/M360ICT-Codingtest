import React, { useState } from "react";
import { Pagination } from "antd";
import { useGetFlightsQuery } from "../services/flightApi";
import { Flight } from "../models/flight.model";
import { Card, Skeleton } from "antd";
import { useSelector } from "react-redux";
import { truncateString } from "../models/Reuse";
import { Link } from "react-router-dom";

// const PaginationC: React.FC = () => <Pagination onChange={onChange} total={50} />;

const { Meta } = Card;

const PaginationC = () => {
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [loading, setLoading] = useState(false);

  const filterBy = useSelector((state: any) => state.filter.filter);

  const { data, error, isLoading, isSuccess } = useGetFlightsQuery();

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
        {isLoading && (
          <div style={{ minHeight: "100vh", marginTop: "5rem" }}>
            <Skeleton loading={isLoading} avatar active></Skeleton>
            <Skeleton loading={isLoading} avatar active></Skeleton>{" "}
            <Skeleton loading={isLoading} avatar active></Skeleton>
            <Skeleton loading={isLoading} avatar active></Skeleton>
            <Skeleton loading={isLoading} avatar active></Skeleton>{" "}
            <Skeleton loading={isLoading} avatar active></Skeleton>
          </div>
        )}
        {isSuccess && (
          <div>
            <div className="grid grid-4-cols gap-3">
              {arr
                .slice((page - 1) * size, size * page)
                .map((flight: Flight, i: number) => (
                  <Card
                    key={i}
                    className="shadow"
                    hoverable
                    bodyStyle={{ padding: "1rem" }}
                  >
                    <Link to={`/${flight.flight_number}`}>
                      <div
                        className="flex flex-col 
                    gap-1 items-center"
                      >
                        <img
                          style={{ width: "85%" }}
                          src={flight.links.mission_patch}
                          alt={flight.mission_name}
                        />
                      </div>
                      <Meta
                        title={truncateString(flight.mission_name, 10)}
                        description="This is the description"
                      />
                      <p>Hello world</p>
                    </Link>
                  </Card>
                ))}
            </div>
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
          </div>
        )}
      </div>
    </>
  );
};

export default PaginationC;
