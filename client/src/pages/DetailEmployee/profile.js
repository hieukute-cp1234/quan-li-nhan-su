import React from "react";
import { Form, Select } from "antd";
import {
  InputComponent,
  SelectComponent,
  DateComponent,
} from "../AddEmployee/styled";
import { FORMAT_DATE } from "../../constants/date";
import { customLabel } from "../../helpers/customLabel";
import { MARITAL, GENDER } from "../../constants/employee";

const ProfileForm = () => {
  const { Option } = Select;
  return (
    <>
      <Form.Item label={customLabel("Ngày sinh")} name="date_of_birth">
        <DateComponent format={FORMAT_DATE} />
      </Form.Item>

      <Form.Item label={customLabel("Căn cước")} name="card_id">
        <InputComponent
          style={{ width: "50%" }}
          rules={[{ min: 9, message: "Số căn cước phải có ít nhất 9 số!" }]}
        />
      </Form.Item>

      <Form.Item label={customLabel("Hôn nhân")} name="marital_status">
        <SelectComponent style={{ width: "50%" }}>
          <Option value={1}>{MARITAL.SINGLE}</Option>
          <Option value={2}>{MARITAL.MARRIED}</Option>
          <Option value={3}>{MARITAL.IS_DIFFERENT}</Option>
        </SelectComponent>
      </Form.Item>

      <Form.Item label={customLabel("Giới tính")} name="gender">
        <SelectComponent style={{ width: "50%" }}>
          <Option value={1}>{GENDER.MALE}</Option>
          <Option value={2}>{GENDER.FEMALE}</Option>
          <Option value={3}>{GENDER.IS_DIFFERENT}</Option>
        </SelectComponent>
      </Form.Item>
    </>
  );
};

export default ProfileForm;
