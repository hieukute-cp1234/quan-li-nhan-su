import React from "react";
import { Menu } from "antd";
import { SettingFilled, UserOutlined, LogoutOutlined } from "@ant-design/icons";
import styled from "styled-components";

const WrapperMenu = styled(Menu)`
  padding: 5px 0;
  background-color: #53e0ae;
  border-radius: 5px;

  .menu_item {
    color: #fff;

    &:hover {
      color: #fff;
      background: #41b58c;
    }
  }
`;

export const RenderMenu = (logout, profiles, intergation, name) => {
  const menuItem = [
    {
      key: "PROFILE",
      title: "Profile",
      icon: <UserOutlined />,
      func: profiles,
    },
  ];

  return (
    <WrapperMenu>
      {menuItem.map((item) => (
        <Menu.Item
          className="menu_item"
          icon={item.icon}
          onClick={item.func}
          key={item.key}
        >
          {item.title}
        </Menu.Item>
      ))}
      <hr width="95%" size={1} color="#fff" />
      <Menu.Item
        className="menu_item"
        icon={<LogoutOutlined />}
        onClick={logout}
      >
        Logout
      </Menu.Item>
    </WrapperMenu>
  );
};
