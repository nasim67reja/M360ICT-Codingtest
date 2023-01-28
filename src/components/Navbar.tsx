import React from "react";
import { Layout } from "antd";
import Title from "antd/es/typography/Title";

const { Header, Content } = Layout;

const Navbar = () => {
  const headerStyle: React.CSSProperties = {
    padding: "1.4rem 0 1rem 0",
    marginBottom: "2rem",
    fontSize: "1rem",
    boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.1)",
  };

  return (
    <Header style={headerStyle}>
      <Content className="container">
        <Title level={3}>SpaceX Launch Tracker</Title>
      </Content>
    </Header>
  );
};

export default Navbar;
