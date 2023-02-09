import React from "react";
import { Layout } from "antd";
import Logo from "./Logo";
import styled from "styled-components";
import BoxActions from "./BoxAction";

const { Header } = Layout;
const WrapperHeader = styled(Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 0 30px;
  padding-left: 25px;
  line-height: 50px;
  background: #42ce9f;

  .menu {
    background: #42ce9f;
    height: 100%;
    width: 40%;
    border: none;

    .menu_item {
      border: none;
      &:hover {
        border: none;
      }

      a {
        color: #fff;
      }
    }
  }

  .title_page {
    font-size: 20px;
    margin-top: 15px;
    color: #fff;
    font-weight: bold;
  }
`;

function HeaderApp(props) {
  const {
    openMenu,
    srcLogo,
    titleHeader,
    srcAvatar,
    logout,
    profiles,
    intergation,
    email,
  } = props;

  return (
    <WrapperHeader>
      <Logo openMenu={openMenu} logo={srcLogo} />
      <p className="title_page">{titleHeader}</p>
      <BoxActions
        srcAvatar={srcAvatar}
        email={email}
        logout={logout}
        profiles={profiles}
        intergation={intergation}
      />
    </WrapperHeader>
  );
}

export default HeaderApp;
