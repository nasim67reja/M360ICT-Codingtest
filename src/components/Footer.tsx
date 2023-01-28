import React from "react";
import { Divider, Layout, Typography } from "antd";

const { Text, Link } = Typography;
const { Footer, Content } = Layout;

const FooterC = () => {
  const footerStyle: React.CSSProperties = {
    paddingBottom: "1rem",
    color: "#fff",
  };
  return (
    <Footer style={footerStyle}>
      <Content className="container">
        <Divider type="horizontal" />
        <div className="flex justify-between">
          <Text>© 2023 Nasim Reja.</Text>
          <Text>
            Built with{" "}
            <Link href="https://reactjs.org/" target="_blank">
              React
            </Link>
          </Text>
        </div>
      </Content>
    </Footer>
  );
};

export default FooterC;
