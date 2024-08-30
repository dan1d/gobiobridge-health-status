import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

const { Header } = Layout;

const AppHeader = () => {
  return (
    <Header style={{ display: "flex", alignItems: "center" }}>
      <div className="logo" style={{ marginRight: "20px" }}>
        <img src={logo} alt="Logo" style={{ height: "40px" }} />
      </div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/incidents">Incidents</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/contact">Contact Us</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default AppHeader;
