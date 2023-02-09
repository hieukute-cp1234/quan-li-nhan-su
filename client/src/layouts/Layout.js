import React, { useState, useEffect } from "react";
import { useRouteMatch, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { message } from "antd";
import logo from "../assets/image/login.png";
import { Layout } from "antd";
import Header from "./Header";
import NavBar from "./Navbar";
import { titlePage } from "../helpers/titleHeader";
import { logout, getMe } from "../store/actions/authActions";
import { setUserById } from "../store/actions/userAction";
import getFirstError from "../helpers/getFirstError";
import { BASE_URL_IMG } from "../constants/index";

const { Content } = Layout;

function LayoutApp(props) {
  const [collapsed, setCollapsed] = useState(false);
  const match = useRouteMatch();
  const history = useHistory();
  const dispatch = useDispatch();

  const profile = useSelector((state) => state.auth.profile);

  const openProfile = () => {
    dispatch(setUserById(profile.id));
    history.push("/detail-employee");
  };

  const handleMenu = () => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    dispatch(
      getMe((data) => {
        message.error(getFirstError(data?.error), 1);
      })
    );
  }, [dispatch]);

  const signOut = () => {
    dispatch(
      logout(
        (data) => {
          logoutSuccess(data);
        },
        (data) => {
          message.error(data.message, 2);
        }
      )
    );
  };

  const logoutSuccess = (data) => {
    sessionStorage.clear();
    history.push("/login");
    message.success(data.message, 2);
  };

  return (
    <Layout>
      <Header
        email={profile.email}
        srcLogo={logo}
        srcAvatar={`${BASE_URL_IMG}/${profile.avatar}`}
        titleHeader={titlePage(match.path)}
        openMenu={handleMenu}
        logout={signOut}
        profiles={openProfile}
      />
      <Layout className="site-layout">
        <NavBar collapsed={collapsed} pathname={match.path} />
        <Content
          style={{
            margin: "24px 16px 0",
            overflow: "auto",
            maxHeight: 540,
            backgroundColor: "#fff",
          }}
        >
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: "85vh", overflow: "auto" }}
          >
            {props.children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default LayoutApp;
