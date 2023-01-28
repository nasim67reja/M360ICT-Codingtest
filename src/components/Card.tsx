import React from "react";
import { Card, Space, Tag, Typography } from "antd";
import Meta from "antd/es/card/Meta";
import { Link } from "react-router-dom";
import { dateFormateFuncWithOutTime, truncateString } from "../models/Reuse";

const { Text, Title } = Typography;

const LineC: React.FC<any> = ({ data, title }) => {
  return (
    <div>
      <Text className="bold mr-05">{title}</Text>
      <Text>{data}</Text>
    </div>
  );
};

const CardC: React.FC<any> = ({ flight }) => {
  return (
    <Card className="shadow" hoverable bodyStyle={{ padding: "1rem" }}>
      <Link to={`/${flight.flight_number}`}>
        <div
          className="flex flex-col 
                     items-center"
        >
          <Tag
            style={{ alignSelf: "start" }}
            color={flight.launch_success ? "success" : "error"}
          >
            {flight.launch_success ? "Success" : "Fail"}
          </Tag>
          <img
            style={{ width: "85%" }}
            src={flight.links.mission_patch}
            alt={flight.mission_name}
          />
        </div>
        <div className="flex gap-05 mt-05">
          <Title level={4}>{truncateString(flight.mission_name, 15)}</Title>
          <Text className="translate-y-2">({flight.launch_year})</Text>
        </div>

        <LineC
          data={dateFormateFuncWithOutTime(flight.launch_date_utc)}
          title="Date:"
        />
        <LineC data={flight.rocket.rocket_name} title="Rocket:" />
        <LineC data={flight.launch_site.site_name} title="Launch site:" />
        <LineC data={flight.upcoming ? "Yes" : "No"} title="Upcoming :" />
      </Link>
    </Card>
  );
};

export default CardC;
