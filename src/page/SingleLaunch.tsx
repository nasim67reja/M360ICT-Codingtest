import React from "react";
import { useParams } from "react-router";
import { useGetFlightByNumberQuery } from "../services/flightApi";
import { Space, Typography, Col, Row, Skeleton, Divider, Button } from "antd";
import { dateFormateFunc } from "../models/Reuse";
import { Link } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";
import FooterC from "../components/Footer";

const { Text, Title } = Typography;

const Line: React.FC<any> = ({ data, title }) => {
  return (
    <div>
      <Text className="bold mr-05 text-xl">{title}</Text>
      <Text>{data}</Text>
    </div>
  );
};

const SingleLaunch = () => {
  const param = useParams();

  let num: number = Number(param.flight_num);
  const { data, isLoading, isError, isSuccess } = useGetFlightByNumberQuery(
    num
  );

  const headStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    marginBottom: "4rem",
  };

  const btnStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "0.5rem",
    margin: "1rem 0 2rem 0",
  };

  return (
    <>
      <div>
        <div className="container text-xl">
          {isLoading && (
            <>
              <div style={{ minHeight: "100vh" }}>
                <div className="mb-4">
                  <Skeleton paragraph={{ rows: 1 }} />
                </div>
                <Row>
                  <Col span={12}>
                    <div className="center h-full">
                      <Skeleton.Image active={true} />
                    </div>
                  </Col>
                  <Col span={12}>
                    <Skeleton active paragraph={{ rows: 8 }} />
                  </Col>
                </Row>
              </div>
            </>
          )}
          {isError && <div>Something went wrong</div>}
          {isSuccess && (
            <>
              <Button style={btnStyle}>
                <ArrowLeftOutlined />
                <Link to="/" style={{ textDecoration: "none" }}>
                  Back to Home
                </Link>
              </Button>
              <div style={headStyle}>
                <Title level={1} style={{ fontSize: "2rem", color: "#555" }}>
                  {data.mission_name}
                </Title>
                <Space
                  className="break"
                  direction="horizontal"
                  style={{ alignItems: "start" }}
                >
                  <Text>Mission launch in {data.launch_year},</Text>
                  <Text>
                    Launch {data.launch_success ? "Succesfully" : "Fail"}{" "}
                    {data.launch_success
                      ? ""
                      : `(${data.launch_failure_details.reason})`}
                  </Text>
                </Space>
              </div>
              <Row className="break">
                <Col span={12}>
                  <img
                    style={{ width: "80%" }}
                    src={data.links.mission_patch}
                    alt={data.mission_name}
                  />
                </Col>
                <Col span={12} style={{ padding: "6rem 0rem 0rem 4rem" }}>
                  <div className="flex flex-col gap-1 ">
                    <Line title="Deatails :" data={data.details} />

                    <Line
                      title="Launch date :"
                      data={dateFormateFunc(data.launch_date_utc)}
                    />

                    <Line
                      title="Launch site :"
                      data={data.launch_site.site_name_long}
                    />

                    <Line
                      title="Upcoming :"
                      data={data.upcoming ? "Yes" : "No"}
                    />

                    <div className="flex gap-2">
                      <Line
                        title="Rocket name :"
                        data={data.rocket.rocket_name}
                      />

                      <Line title="Type :" data={data.rocket.rocket_type} />
                    </div>
                    <div className="flex gap-1">
                      <Line
                        title="Rocket Nationality :"
                        data={
                          data.rocket.second_stage.payloads &&
                          data.rocket.second_stage.payloads[0].nationality
                        }
                      />
                      <Line
                        title="manufacturer :"
                        data={
                          data.rocket.second_stage.payloads &&
                          data.rocket.second_stage.payloads[0].manufacturer
                        }
                      />
                    </div>
                    <Line
                      data={
                        data.rocket.second_stage.payloads &&
                        data.rocket.second_stage.payloads[0].customers &&
                        data.rocket.second_stage.payloads[0].customers[0]
                      }
                      title="Customers :"
                    />

                    <div className="flex gap-1 translate-y-2">
                      <a
                        style={{ textDecoration: "underline" }}
                        target="_blank"
                        href={data.links.article_link}
                      >
                        Airticle
                      </a>
                      <a
                        style={{ textDecoration: "underline" }}
                        target="_blank"
                        href={data.links.wikipedia}
                      >
                        Wikipedia
                      </a>
                      <a
                        style={{ textDecoration: "underline" }}
                        target="_blank"
                        href={data.links.video_link}
                      >
                        Video
                      </a>
                    </div>
                  </div>
                </Col>
              </Row>
            </>
          )}
        </div>
      </div>
      <FooterC />
    </>
  );
};

export default SingleLaunch;
