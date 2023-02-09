import React from "react";
import { Form, Select } from "antd";
import {
  InputComponent,
  TextAreaComponent,
  SelectComponent,
  DateComponent,
} from "./styled";

const LeftForm = () => {
  const { Option } = Select;
  return (
    <>
      <Form.Item
        label="Tên"
        name="name"
        rules={[{ required: true, message: "Tên nhân viên là bắt buộc!" }]}
      >
        <InputComponent placeholder="VD: Nguyễn Văn Hoàng" />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: "Email là bắt buộc!" }]}
      >
        <InputComponent placeholder="VD: hoangnv@gmail.com" />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Mật khẩu là bắt buộc" }]}
      >
        <InputComponent placeholder="VD: @hbAf123" />
      </Form.Item>
      <Form.Item label="Địa chỉ" name="address">
        <TextAreaComponent rows={2} placeholder="VD: 219 Trung Kính, ..." />
      </Form.Item>
      <Form.Item
        label="Số điện thoại"
        name="phone"
        rules={[{ min: 10, message: "Số điện thoại phải có ít nhất 10 số!" }]}
      >
        <InputComponent
          style={{ width: "100%" }}
          placeholder="VD: 1234432123"
        />
      </Form.Item>
      <Form.Item label="Ngày sinh" name="date_of_birth" s>
        <DateComponent placeholder="Chọn ngày sinh..." />
      </Form.Item>
      <Form.Item label="Giới tính" name="gender">
        <SelectComponent placeholder="VD: Nam">
          <Option value={1}>Nam</Option>
          <Option value={2}>Nữ</Option>
          <Option value={3}>Khác</Option>
        </SelectComponent>
      </Form.Item>
      <Form.Item
        label="Số căn cước"
        name="card_id"
        rules={[{ min: 9, message: "Số căn cước phải có ít nhất 9 số!" }]}
      >
        <InputComponent placeholder="VD: 101246872" style={{ width: "100%" }} />
      </Form.Item>
      <Form.Item label="Hôn nhân" name="marital_status">
        <SelectComponent placeholder="VD: Độc thân">
          <Option value={1}>Độc thân</Option>
          <Option value={2}>Đã có gia đình</Option>
          <Option value={2}>Mỗi quan hệ khác</Option>
        </SelectComponent>
      </Form.Item>
    </>
  );
};

export default LeftForm;
