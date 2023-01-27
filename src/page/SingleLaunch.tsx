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
  if (
    data &&
    data.rocket &&
    data.rocket.second_stage &&
    data.rocket.second_stage.payloads
  ) {
    console.log(data.rocket.second_stage.payloads[0]);
  }
  return (
    <div>
      <div className="container text-xl">
        {isSuccess && (
          <>
            <Space direction="vertical">
              <Title level={1}>{data.mission_name}</Title>
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
                <div className="flex flex-col gap-05 ">
                  <div>
                    <Text className="bold mr-1 text-xl">Deatails :</Text>
                    <Text>{data.details}</Text>
                  </div>

                  <div>
                    <Text className="bold mr-1 text-xl">Launch date :</Text>
                    <Text>{dateFormateFunc(data.launch_date_utc)}</Text>
                  </div>
                  <div>
                    <Text className="bold mr-1 text-xl">Launch site :</Text>
                    <Text>{data.launch_site.site_name_long}</Text>
                  </div>
                  <div>
                    <Text className="bold mr-1 text-xl">Upcoming :</Text>
                    <Text>{data.upcoming ? "Yes" : "No"}</Text>
                  </div>
                  <div>
                    <Text className="bold mr-1 text-xl">Rocket name :</Text>
                    <Text>{data.rocket.rocket_name}</Text>
                  </div>
                  <div>
                    <Text className="bold mr-1 text-xl">
                      Rocket Nationality :
                    </Text>
                    <Text>
                      {data.rocket.second_stage.payloads &&
                        data.rocket.second_stage.payloads[0].nationality}
                    </Text>
                  </div>
                  <div>
                    <Text className="bold mr-1 text-xl">manufacturer :</Text>
                    <Text>
                      {data.rocket.second_stage.payloads &&
                        data.rocket.second_stage.payloads[0].manufacturer}
                    </Text>
                  </div>
                  <div>
                    <Text className="bold mr-1 text-xl">Customers :</Text>
                    <Text>
                      {data.rocket.second_stage.payloads &&
                        data.rocket.second_stage.payloads[0].customers &&
                        data.rocket.second_stage.payloads[0].customers[0]}
                    </Text>
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
