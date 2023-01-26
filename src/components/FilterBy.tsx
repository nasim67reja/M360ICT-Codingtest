import React from "react";
import { Select, Space, Typography } from "antd";
import { filterActions } from "../store/filterBy";
import { useDispatch, useSelector } from "react-redux";

const { Text, Link } = Typography;
const FilterBy = () => {
  const dispatch = useDispatch();

  const handleChange = (value: string) => {
    // console.log(`selected ${value}`);
    dispatch(filterActions.storeFilter(value));
  };

  return (
    <Space wrap className="container">
      <Text>Filter By :</Text>
      <Select
        defaultValue="All Launch"
        style={{ width: 250 }}
        onChange={handleChange}
        options={[
          { value: "all", label: "All Launch" },
          { value: "last-week", label: "Last Week" },
          { value: "last-month", label: "Last Month" },
          { value: "last-year", label: "Last Year" },
          { value: "launch-fail", label: "Launching Fail" },
          { value: "launch-success", label: "Launching Success" },
          { value: true, label: "Upcoming" },
        ]}
      />
    </Space>
  );
};

export default FilterBy;
