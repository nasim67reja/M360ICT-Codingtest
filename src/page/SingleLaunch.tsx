import React from "react";
import { useParams } from "react-router";
import { useGetFlightByNumberQuery } from "../services/flightApi";
import { Space, Typography, Col, Row } from "antd";
import { dateFormateFunc } from "../models/Reuse";

const { Text, Title } = Typography;

const SingleLaunch = () => {
  const param = useParams();

  let num: number = Number(param.flight_num);
  const { data, isLoading, isError, isSuccess } = useGetFlightByNumberQuery(
    num
  );

  return (
    <div>
      <div className="container">
        {isSuccess && (
          <>
            <Space direction="vertical">
              <Title level={2}>{data.mission_name}</Title>
              <Text>Mission launch in {data.launch_year}</Text>
              <Text>Launch {data.launch_success ? "Succesfully" : "Fail"}</Text>
            </Space>
            <Row>
              <Col span={12}>
                <img
                  style={{ width: "80%" }}
                  src={data.links.mission_patch}
                  alt={data.mission_name}
                />
              </Col>
              <Col span={12} style={{ padding: "6rem 0rem" }}>
                <div className="flex flex-col gap-05">
                  <div>
                    <Text>Deatails :</Text>
                    <Text>{data.details}</Text>
                  </div>

                  <div>
                    <Text>Launch date :</Text>
                    <Text>{dateFormateFunc(data.launch_date_utc)}</Text>
                  </div>
                  <div>
                    <Text>Launch site :</Text>
                    <Text>{data.launch_site.site_name_long}</Text>
                  </div>
                  <div>
                    <Text>Upcoming :</Text>
                    <Text>{data.upcoming ? "Yes" : "No"}</Text>
                  </div>
                  <div>
                    <Text>Rocket name :</Text>
                    <Text>{data.rocket.rocket_name}</Text>
                  </div>
                </div>
              </Col>
            </Row>
          </>
        )}
      </div>
    </div>
  );
};

export default SingleLaunch;
