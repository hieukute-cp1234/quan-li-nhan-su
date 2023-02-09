import React from "react";
import styled from "styled-components";
import { Menu } from "antd";
import { DollarCircleOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { MENU } from "./menu";
import { decentralizationAdmin } from "../../helpers/customRole";

const WapperNavbar = styled(Menu)`
  .menu-item {
    color: #42ce9f;
    font-size: 16px;
    font-weight: 600;
    margin-top: 2px;
    margin-bottom: 0px !important;

    .nav-link {
      color: #42ce9f;

      &:hover {
        color: #fff;
      }
    }

    &:hover {
      background-color: #42ce9f;
      color: #fff;
    }

    &:after {
      border-right: 3px solid #42ce9f;
    }
  }
`;

const MenuComponent = ({ pathname }) => {
  const roleByUser = useSelector((state) => state.auth.profile.role_id);
  return (
    <WapperNavbar mode="inline" defaultSelectedKeys={pathname}>
      {MENU.map((item) => (
        <Menu.Item className="menu-item" key={item.path} icon={item.icon}>
          <NavLink className="nav-link" to={item.path}>
            {item.title}
          </NavLink>
        </Menu.Item>
      ))}
      {!decentralizationAdmin(roleByUser) && (
        <Menu.Item
          className="menu-item"
          key="/wage"
          icon={<DollarCircleOutlined />}
        >
          <NavLink className="nav-link" to="/wage">
            Lương
          </NavLink>
        </Menu.Item>
      )}
    </WapperNavbar>
  );
};

export default MenuComponent;
