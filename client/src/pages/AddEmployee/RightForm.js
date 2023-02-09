import React, { useState, useEffect } from "react";
import { Form, AutoComplete } from "antd";
import {
  DateComponent,
  SelectComponent,
  AutoComponent,
  InputComponent,
} from "./styled";
import { configData } from "../../helpers/search";

const LeftForm = ({
  listPM,
  level,
  role,
  specialize,
  department,
  staffTypes,
  form,
}) => {
  const { Option } = AutoComplete;
  const [search, setSearch] = useState("");
  const [salaryLevel, setSalaryLevel] = useState(0);
  const [salaryRole, setSalaryRole] = useState(0);
  const [salaryStaff, setSalaryStaff] = useState(0);
  const [salarySpeci, setSalarySpeci] = useState(0);
  const [isCheck, setCheck] = useState(true);

  const handleOption = configData(search, listPM).map((item, index) => (
    <Option key={item.id} value={item.name}>
      {item.name}
    </Option>
  ));

  useEffect(() => {
    form.setFieldsValue({
      salary_factor: (salaryLevel + salaryRole + salaryStaff + salarySpeci) / 4,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCheck]);

  const handleSearch = (value) => {
    setSearch(value);
  };

  const onChangeDepartment = (value) => {
    const currentDepartment = department.find((item) => item.id === value);
    form.setFieldsValue({
      manager_id: currentDepartment.head_of_department_name,
    });
  };

  const onChangeLevel = (value) => {
    const wage = level.find((item) => item.id === value);
    setCheck(!isCheck);
    setSalaryLevel(wage.salary_factor);
  };

  const onChangeStaffType = (value) => {
    const wage = staffTypes.find((item) => item.id === value);
    setSalaryStaff(wage.salary_factor);
    setCheck(!isCheck);
  };

  const onChangeRole = (value) => {
    const wage = role.find((item) => item.id === value);
    setSalaryRole(wage.salary_factor);
    setCheck(!isCheck);
  };

  const onChangeSpecialize = (value) => {
    const wage = specialize.find((item) => item.id === value);
    setSalarySpeci(wage.salary_factor);
    setCheck(!isCheck);
  };

  return (
    <>
      <Form.Item
        label="Bộ phận"
        name="department_id"
        rules={[{ required: true, message: "Không thể không có bộ phận!" }]}
      >
        <SelectComponent placeholder="VD: BOD" onChange={onChangeDepartment}>
          {department.map((item) => (
            <Option value={item.id}>{item.name}</Option>
          ))}
        </SelectComponent>
      </Form.Item>
      <Form.Item
        label="Quản lý"
        name="manager_id"
        rules={[{ required: true, message: "Trưởng bộ phận là bắt buộc!" }]}
      >
        <AutoComponent onSearch={handleSearch} placeholder="VD: HoangNV">
          {handleOption}
        </AutoComponent>
      </Form.Item>
      <Form.Item
        label="Trình độ"
        name="level_id"
        rules={[
          { required: true, message: "Trình độ liên quan đến hệ số lương!" },
        ]}
      >
        <SelectComponent placeholder="VD: Fresher" onChange={onChangeLevel}>
          {level.map((level) => (
            <Option value={level.id}>{level.name}</Option>
          ))}
        </SelectComponent>
      </Form.Item>
      <Form.Item
        label="Hình thức"
        name="staff_type_id"
        rules={[{ required: true, message: "Không được bỏ trống!" }]}
      >
        <SelectComponent
          isWidth={true}
          placeholder="VD: Chính thức"
          onChange={onChangeStaffType}
        >
          {staffTypes.map((item) => (
            <Option value={item.id}>{item.name}</Option>
          ))}
        </SelectComponent>
      </Form.Item>
      <Form.Item
        label="Vị trí"
        name="role_id"
        rules={[{ required: true, message: "Vị trí làm việc là bắt buộc!" }]}
      >
        <SelectComponent placeholder="VD: Admin" onChange={onChangeRole}>
          {role.map((role) => (
            <Option value={role.id}>{role.name}</Option>
          ))}
        </SelectComponent>
      </Form.Item>
      <Form.Item
        label="Chuyên môn"
        name="specialize_id"
        rules={[{ required: true, message: "Chuyên môn không thể để trống!" }]}
      >
        <SelectComponent
          placeholder="VD: BackEnd"
          onChange={onChangeSpecialize}
        >
          {specialize.map((item) => (
            <Option value={item.id}>{item.name}</Option>
          ))}
        </SelectComponent>
      </Form.Item>
      <Form.Item
        label="Lương cơ bản"
        name="salary_basic"
        rules={[{ required: true, message: "Hãy thêm mức lương cơ bản!" }]}
      >
        <InputComponent type="number" placeholder="vd: 100,000,000" />
      </Form.Item>
      <Form.Item label="Hệ số lương" name="salary_factor">
        <InputComponent
          readOnly
          type="number"
          placeholder="vd: 2.5"
          style={{ width: "50%" }}
        />
      </Form.Item>
      <Form.Item
        label="Trạng thái"
        name="work_status"
        rules={[{ required: true, message: "Phải có Trạng thái!" }]}
      >
        <SelectComponent placeholder="Active">
          <Option value={1}>Active</Option>
          <Option value={2}>In Active</Option>
        </SelectComponent>
      </Form.Item>
      <Form.Item
        label="Ngày bắt đầu"
        name="start_work"
        rules={[{ required: true, message: "Hãy thêm ngày bắt đầu!" }]}
      >
        <DateComponent placeholder="To day..." />
      </Form.Item>
    </>
  );
};

export default LeftForm;
