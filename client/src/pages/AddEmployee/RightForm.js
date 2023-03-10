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
        label="B??? ph???n"
        name="department_id"
        rules={[{ required: true, message: "Kh??ng th??? kh??ng c?? b??? ph???n!" }]}
      >
        <SelectComponent placeholder="VD: BOD" onChange={onChangeDepartment}>
          {department.map((item) => (
            <Option value={item.id}>{item.name}</Option>
          ))}
        </SelectComponent>
      </Form.Item>
      <Form.Item
        label="Qu???n l??"
        name="manager_id"
        rules={[{ required: true, message: "Tr?????ng b??? ph???n l?? b???t bu???c!" }]}
      >
        <AutoComponent onSearch={handleSearch} placeholder="VD: HoangNV">
          {handleOption}
        </AutoComponent>
      </Form.Item>
      <Form.Item
        label="Tr??nh ?????"
        name="level_id"
        rules={[
          { required: true, message: "Tr??nh ????? li??n quan ?????n h??? s??? l????ng!" },
        ]}
      >
        <SelectComponent placeholder="VD: Fresher" onChange={onChangeLevel}>
          {level.map((level) => (
            <Option value={level.id}>{level.name}</Option>
          ))}
        </SelectComponent>
      </Form.Item>
      <Form.Item
        label="H??nh th???c"
        name="staff_type_id"
        rules={[{ required: true, message: "Kh??ng ???????c b??? tr???ng!" }]}
      >
        <SelectComponent
          isWidth={true}
          placeholder="VD: Ch??nh th???c"
          onChange={onChangeStaffType}
        >
          {staffTypes.map((item) => (
            <Option value={item.id}>{item.name}</Option>
          ))}
        </SelectComponent>
      </Form.Item>
      <Form.Item
        label="V??? tr??"
        name="role_id"
        rules={[{ required: true, message: "V??? tr?? l??m vi???c l?? b???t bu???c!" }]}
      >
        <SelectComponent placeholder="VD: Admin" onChange={onChangeRole}>
          {role.map((role) => (
            <Option value={role.id}>{role.name}</Option>
          ))}
        </SelectComponent>
      </Form.Item>
      <Form.Item
        label="Chuy??n m??n"
        name="specialize_id"
        rules={[{ required: true, message: "Chuy??n m??n kh??ng th??? ????? tr???ng!" }]}
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
        label="L????ng c?? b???n"
        name="salary_basic"
        rules={[{ required: true, message: "H??y th??m m???c l????ng c?? b???n!" }]}
      >
        <InputComponent type="number" placeholder="vd: 100,000,000" />
      </Form.Item>
      <Form.Item label="H??? s??? l????ng" name="salary_factor">
        <InputComponent
          readOnly
          type="number"
          placeholder="vd: 2.5"
          style={{ width: "50%" }}
        />
      </Form.Item>
      <Form.Item
        label="Tr???ng th??i"
        name="work_status"
        rules={[{ required: true, message: "Ph???i c?? Tr???ng th??i!" }]}
      >
        <SelectComponent placeholder="Active">
          <Option value={1}>Active</Option>
          <Option value={2}>In Active</Option>
        </SelectComponent>
      </Form.Item>
      <Form.Item
        label="Ng??y b???t ?????u"
        name="start_work"
        rules={[{ required: true, message: "H??y th??m ng??y b???t ?????u!" }]}
      >
        <DateComponent placeholder="To day..." />
      </Form.Item>
    </>
  );
};

export default LeftForm;
