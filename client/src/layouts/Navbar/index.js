import React from "react";
import { Layout } from "antd";
import MenuComponent from "./MenuItem";

const NavBar = (props) => {
  const { collapsed, pathname } = props;
  const numberWidth = 150;

  const { Sider } = Layout;

  return (
    <Sider
      collapsed={collapsed}
      theme="light"
      style={{
        width: numberWidth,
        minWidth: numberWidth,
        maxWidth: numberWidth,
      }}
    >
      <MenuComponent pathname={pathname} />
    </Sider>
  );
};

export default NavBar;
