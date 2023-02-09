import React from "react";
import { Dropdown, Avatar } from "antd";
import { UserOutlined, CaretDownFilled } from "@ant-design/icons";
import { WrapperAvatar } from "./styled";
import { RenderMenu } from "./Menu";

const BoxProfileAvatar = (props) => {
  const { email, srcAvatar, logout, profiles, intergation } = props;

  const renderAvatar = (email, src) => (
    <div className="box_avt">
      <Avatar size={30} icon={<UserOutlined />} src={src} />
      <span className="text_name">{email}</span>
      <CaretDownFilled className="icon" />
    </div>
  );

  return (
    <WrapperAvatar>
      <Dropdown
        trigger="click"
        overlay={RenderMenu(logout, profiles, intergation)}
        placement="bottomCenter"
      >
        {renderAvatar(email, srcAvatar)}
      </Dropdown>
    </WrapperAvatar>
  );
};

export default BoxProfileAvatar;
