import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

const { Header } = Layout;

const AppHeader = () => {
  return (
    <Header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div className="logo" style={{ marginRight: "20px" }}>
          <img src={`${process.env.PUBLIC_URL}/assets/logo.svg`} alt="Logo" style={{ height: "40px" }} />
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="1">
            <Link to="/stakeholder-presentation">Presentation MVP</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/incidents">Incidents</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/contact">Contact Us</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <a href="https://www.gobiobridge.com" target="_blank" rel="noopener noreferrer">
              gobiobridge.com
            </a>
          </Menu.Item>
        </Menu>
      </div>
    </Header>
  );
};

export default AppHeader;
