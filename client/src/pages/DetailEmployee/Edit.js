import React, { useEffect, useState } from "react";
import { Drawer, Form, Row, Col, message } from "antd";
import { useDispatch } from "react-redux";
import Header from "./Header";
import Information from "./EditInfor";
import Position from "./EditPosition";

import { fetchAllLevels } from "../../store/actions/levelAction";
import { fetchAllRoles } from "../../store/actions/roleAction";
import { fetchAllSpecializes } from "../../store/actions/specializeAction";
import { fetchDataDepartment } from "../../store/actions/department";
import { fetchStaffTypes } from "../../store/actions/staffTypeAction";
import getFirstError from "../../helpers/getFirstError";
import { Scroll } from "../AddEmployee/styled";

const PopupEdit = (props) => {
  const {
    onClose,
    visible,
    form,
    openPopupEdit,
    onFinish,
    isEdit,
    onSubmit,
    name,
    gender,
    isMe,
    profile,
  } = props;
  const layout = {
    labelCol: { span: 7 },
    wrapperCol: { span: 24 },
  };

  const dispatch = useDispatch();

  const [level, setLevel] = useState([]);
  const [role, setRole] = useState([]);
  const [specialize, setSpecialize] = useState([]);
  const [department, setDepartment] = useState([]);
  const [staffTypes, setStaffTypes] = useState([]);

  useEffect(() => {
    dispatch(
      fetchAllLevels(
        (data) => setLevel(data),
        (error) => onError(error)
      )
    );
    dispatch(
      fetchAllRoles(
        (data) => setRole(data),
        (error) => onError(error)
      )
    );
    dispatch(
      fetchAllSpecializes(
        (data) => setSpecialize(data),
        (error) => onError(error)
      )
    );
    dispatch(
      fetchDataDepartment(
        (data) => setDepartment(data),
        (data) => onError(data)
      )
    );
    dispatch(
      fetchStaffTypes(
        (data) => setStaffTypes(data),
        (error) => onError(error)
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onError = (data) => {
    message.error(getFirstError(data?.error), 1);
  };
  return (
    <Drawer
      placement="top"
      width="100%"
      height="100%"
      onClose={onClose}
      visible={visible}
    >
      <Header
        isEdit={isEdit}
        name={name}
        gender={gender}
        edit={openPopupEdit}
        submit={onSubmit}
        isMe={isMe}
        profile={profile}
      />
      <Scroll isEdit={true}>
        <Form {...layout} name="basic" form={form} onFinish={onFinish}>
          <Row>
            <Col span={8} offset={2}>
              <Information />
            </Col>
            <Col span={8} offset={3}>
              <Position
                form={form}
                role={role}
                level={level}
                specialize={specialize}
                department={department}
                staffTypes={staffTypes}
              />
            </Col>
          </Row>
        </Form>
      </Scroll>
    </Drawer>
  );
};

export default PopupEdit;
