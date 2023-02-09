import React from "react";
import { Button } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const BoxButton = ({ isLoading, goToRegister }) => {
  return (
    <div className="box_button-action">
      <Button className="button" htmlType="submit">
        {isLoading ? (
          <LoadingOutlined style={{ fontSize: 24, color: "#fff" }} spin />
        ) : (
          "Đăng nhập"
        )}
      </Button>
    </div>
  );
};

export default BoxButton;
