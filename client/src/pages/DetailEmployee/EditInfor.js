import React from "react";
import { Form } from "antd";
import { useSelector } from "react-redux";
import { InputComponent, TextAreaComponent } from "../AddEmployee/styled";
import { customLabel } from "../../helpers/customLabel";
import ProfileForm from "./profile";

const Information = () => {
  const userById = useSelector((state) => state.user.userById);
  const roleByUser = useSelector((state) => state.auth.profile);
  const isMe = userById === roleByUser.id;
  return (
    <>
      <Form.Item label={customLabel("Tên")} name="name">
        <InputComponent />
      </Form.Item>

      <Form.Item label={customLabel("Số điện thoại")} name="phone">
        <InputComponent
          style={{ width: "50%" }}
          rules={[{ min: 10, message: "Số điện thoại phải có ít nhất 10 số!" }]}
        />
      </Form.Item>

      <Form.Item label={customLabel("Đại chỉ")} name="address">
        <TextAreaComponent rows={2} />
      </Form.Item>
      {!isMe && <ProfileForm />}
    </>
  );
};

export default Information;
