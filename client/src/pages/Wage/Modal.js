import React, { useState } from "react";
import { Form, Select, Button, Modal } from "antd";
import {
  AutoComponent,
  NumberComponent,
  DateComponent,
} from "../AddEmployee/styled";
import { ButtonAddModal } from "../../components/buttonAddModal";
import { LABEL } from "../../constants/stafftypes";
import { configData } from "../../helpers/search";
import { workDayCalculation } from "../../helpers/formatDate";

const WagePage = (props) => {
  const { openPopup, handleCancel, form, onFinish, title, isUpdate, listUser } =
    props;
  const { Option } = Select;
  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
  };

  const tailLayout = {
    wrapperCol: {
      offset: 6,
      span: 16,
    },
  };
  const [search, setSearch] = useState([]);

  const handleSearch = (value) => {
    setSearch(value);
  };

  const handleOption = configData(search, listUser).map(
    (user) =>
      user.work_status === 1 && (
        <Option key={user.id} value={user.name}>
          {user.name}
        </Option>
      )
  );

  const onChangeName = (value) => {
    const salazyByUser = listUser.find((item) => item.name === value);
    form.setFieldsValue({
      salary_basic: salazyByUser?.salary_basic || "",
      salary_factor: salazyByUser?.salary_factor || "",
    });
  };

  const onChangeDate = (value) => {
    form.setFieldsValue({
      total_working_days: workDayCalculation(value),
    });
  };

  return (
    <Modal
      title={title}
      visible={openPopup}
      onCancel={handleCancel}
      footer={null}
      style={{ top: 5 }}
    >
      <Form {...layout} name="basic" onFinish={onFinish} form={form}>
        <Form.Item
          label="Nhân viên"
          name="user_id"
          rules={[{ required: true, message: "Nhân viên là bắt buộc!" }]}
        >
          <AutoComponent
            disabled={isUpdate}
            onSearch={handleSearch}
            onChange={onChangeName}
          >
            {handleOption}
          </AutoComponent>
        </Form.Item>
        <Form.Item
          label="Lương cơ bản"
          name="salary_basic"
          rules={[{ required: true, message: "Nhân viên là bắt buộc!" }]}
        >
          <NumberComponent
            disabled={isUpdate}
            style={{ width: "100%" }}
            readOnly
          />
        </Form.Item>

        <Form.Item
          label="Lương bảo hiểm"
          name="insurance_premium_salary"
          rules={[{ required: true, message: "Nhân viên là bắt buộc!" }]}
        >
          <NumberComponent style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item label="Phụ cấp" name="allowance_money">
          <NumberComponent defaultValue={1100000} style={{ width: "50%" }} />
        </Form.Item>
        <Form.Item label="Hệ số lương" name="salary_factor">
          <NumberComponent
            disabled={isUpdate}
            style={{ width: "50%" }}
            readOnly
          />
        </Form.Item>

        <Form.Item label="Thưởng" name="bonus_money">
          <NumberComponent style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item label="Tháng" name="month_pay">
          <DateComponent
            picker="month"
            format="MM-YYYY"
            onChange={onChangeDate}
          />
        </Form.Item>

        <Form.Item label="Công chuẩn" name="total_working_days">
          <NumberComponent style={{ width: "50%" }} readOnly />
        </Form.Item>

        <Form.Item label="Công thực" name="total_working_days_standard">
          <NumberComponent style={{ width: "50%" }} />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="default" onClick={handleCancel}>
            Hủy bỏ
          </Button>
          <ButtonAddModal
            title={isUpdate ? LABEL.BUTTON_EDIT : LABEL.BUTTON_ADD}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default WagePage;
