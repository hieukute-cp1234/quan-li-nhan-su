import React from "react";
import { Avatar, Badge, Tooltip, Upload, message } from "antd";
import { UserOutlined, ToolOutlined, CameraOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import styled from "styled-components";
import { WapperHeader, ButtonUpdate } from "./styled";
import { updateAvatar } from "../../services/userSevice";
import { BASE_URL_IMG } from "../../constants/index";

const Header = (props) => {
  const { name, gender, edit, isEdit, submit, isDisable, isMe, profile } =
    props;

  const WrapperPhoto = styled(Upload)`
    border-radius: 999px;
    padding: 0px 4px;
    margin: 80px 15px 0 0;
    background-color: rgba(255, 255, 255, 0.8);
    .icon {
      color: rgba(140, 136, 136, 1);
    }
  `;

  const propUpdateAvt = {
    name: "file",
    showUploadList: false,
    accept: ".jpg, .png, .svg, .jpeg",
    action: async (file) => {
      let formData = new FormData();
      formData.append("avatar", file);
      try {
        const response = await updateAvatar(formData);
        message.success(response.data.message, 2);
      } catch (err) {
        message.error("Định dạng không đúng", 2);
      }
    },
    headers: {
      Authorization: "Bearer " + sessionStorage.getItem("token"),
    },
    onChange({ file, fileList }) {
      if (file.status !== "uploading") {
        console.log(file, fileList);
      }
    },
  };

  return (
    <WapperHeader isEdit={isEdit}>
      <div className="box_avatar">
        {isMe ? (
          <Badge
            count={
              <Tooltip placement="topLeft" title="Thay đổi ảnh">
                <WrapperPhoto {...propUpdateAvt}>
                  <CameraOutlined className="icon" />
                </WrapperPhoto>
              </Tooltip>
            }
            offset={[-15, 80]}
          >
            <Avatar
              size={100}
              icon={<UserOutlined />}
              src={`${BASE_URL_IMG}/${profile.avatar}`}
            />
          </Badge>
        ) : (
          <Avatar
            size={100}
            icon={<UserOutlined />}
            src={`${BASE_URL_IMG}/${profile.avatar}`}
          />
        )}
        <div>
          <p className="name">{name}</p>
          <p className="gender">Giới tính: {gender}</p>
        </div>
      </div>
      {!isEdit ? (
        <ButtonUpdate
          icon={<ToolOutlined />}
          onClick={edit}
          disabled={isDisable}
        >
          Sửa
        </ButtonUpdate>
      ) : (
        <ButtonUpdate onClick={submit}>Lưu</ButtonUpdate>
      )}
    </WapperHeader>
  );
};

Header.propTypes = {
  name: PropTypes.string,
  gender: PropTypes.string,
  edit: PropTypes.func,
};

export default Header;
