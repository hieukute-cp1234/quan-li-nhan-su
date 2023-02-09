import React, { useState, useEffect } from "react";
import { Form, Select, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  AutoComponent,
  SelectComponent,
  DateComponent,
  InputComponent,
} from "../AddEmployee/styled";
import { customLabel } from "../../helpers/customLabel";
import { STATUS } from "../../constants/employee";
import { FORMAT_DATE } from "../../constants/date";
import { fetchListPM } from "../../store/actions/userAction";
import ProfileForm from "./profile";
import { configData } from "../../helpers/search";
import getFirstError from "../../helpers/getFirstError";
import { decentralizationAdmin } from "../../helpers/customRole";

const Position = ({
  staffTypes,
  specialize,
  level,
  department,
  role,
  form,
}) => {
  const { Option } = Select;
  const dispatch = useDispatch();
  const userById = useSelector((state) => state.user.userById);
  const roleByUser = useSelector((state) => state.auth.profile);
  const isMe = userById === roleByUser.id;
  const [allPM, setAllPM] = useState([]);
  const [search, setSearch] = useState("");
  const [isCheck, setCheck] = useState(false);
  const [salaryLevel, setSalaryLevel] = useState(0);
  const [salaryRole, setSalaryRole] = useState(0);
  const [salaryStaff, setSalaryStaff] = useState(0);
  const [salarySpeci, setSalarySpeci] = useState(0);

  useEffect(() => {
    dispatch(
      fetchListPM(
        (data) => setAllPM(data.data),
        (data) => message.error(getFirstError(data?.error), 1)
      )
    );
  }, [dispatch]);

  useEffect(() => {
    form.setFieldsValue({
      salary_factor: (salaryLevel + salaryRole + salaryStaff + salarySpeci) / 4,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCheck]);

  const isAdmin = !decentralizationAdmin(roleByUser.id) && !isMe;
  const handleOption = configData(search, allPM).map((item, index) => (
    <Option key={item.id} value={item.name}>
      {item.name}
    </Option>
  ));

  const handleSearch = (value) => {
    setSearch(value);
  };

  const changeDepartment = (value) => {
    const currentDepartment = department.find((item) => item.id === value);
    form.setFieldsValue({
      manager_id: currentDepartment.head_of_department_name,
    });
  };

  const onChangeLevel = (value) => {
    const wage = level.find((item) => item.id === value);
    setCheck(!isCheck);
    setSalaryLevel(wage.salary_factor || 0);
  };

  const onChangeStaffType = (value) => {
    const wage = staffTypes.find((item) => item.id === value);
    setSalaryStaff(wage.salary_factor || 0);
    setCheck(!isCheck);
  };

  const onChangeRole = (value) => {
    const wage = role.find((item) => item.id === value);
    setSalaryRole(wage.salary_factor || 0);
    setCheck(!isCheck);
  };

  const onChangeSpecialize = (value) => {
    const wage = specialize.find((item) => item.id === value);
    setSalarySpeci(wage.salary_factor || 0);
    setCheck(!isCheck);
  };

  return isMe ? (
    <>
      <ProfileForm />
    </>
  ) : (
    <>
      <Form.Item label={customLabel("Chuyên môn")} name="specialize_id">
        <SelectComponent style={{ width: "50%" }} onChange={onChangeSpecialize}>
          {specialize.map((item) => (
            <Option value={item.id}>{item.name}</Option>
          ))}
        </SelectComponent>
      </Form.Item>

      <Form.Item label={customLabel("Trình độ")} name="level_id">
        <SelectComponent style={{ width: "50%" }} onChange={onChangeLevel}>
          {level.map((item) => (
            <Option value={item.id}>{item.name}</Option>
          ))}
        </SelectComponent>
      </Form.Item>

      <Form.Item label={customLabel("Phòng ban")} name="department_id">
        <SelectComponent style={{ width: "50%" }} onChange={changeDepartment}>
          {department.map((item) => (
            <Option value={item.id}>{item.name}</Option>
          ))}
        </SelectComponent>
      </Form.Item>

      <Form.Item label={customLabel("Quản lý")} name="manager_id">
        <AutoComponent onSearch={handleSearch}>{handleOption}</AutoComponent>
      </Form.Item>

      <Form.Item label={customLabel("Ngày bắt đầu")} name="start_work">
        <DateComponent format={FORMAT_DATE} />
      </Form.Item>

      <Form.Item label={customLabel("Hình thức")} name="staff_type_id">
        <SelectComponent style={{ width: "50%" }} onChange={onChangeStaffType}>
          {staffTypes.map((item) => (
            <Option value={item.id}>{item.name}</Option>
          ))}
        </SelectComponent>
      </Form.Item>

      <Form.Item label={customLabel("Chức vụ")} name="role_id">
        <SelectComponent style={{ width: "50%" }} onChange={onChangeRole}>
          {role.map((item) => (
            <Option value={item.id}>{item.name}</Option>
          ))}
        </SelectComponent>
      </Form.Item>

      <Form.Item label={customLabel("Trạng thái")} name="work_status">
        <SelectComponent style={{ width: "50%" }}>
          <Option value={1}>{STATUS.ACTIVE}</Option>
          <Option value={2}>{STATUS.IN_ACTIVE}</Option>
        </SelectComponent>
      </Form.Item>

      {isAdmin && (
        <>
          <Form.Item label={customLabel("Lương cơ bản")} name="salary_basic">
            <InputComponent type="number" placeholder="vd: 100,000,000" />
          </Form.Item>
          <Form.Item label={customLabel("Hệ số lương")} name="salary_factor">
            <InputComponent
              type="number"
              placeholder="vd: 2.5"
              style={{ width: "50%" }}
            />
          </Form.Item>
        </>
      )}
    </>
  );
};

export default Position;
