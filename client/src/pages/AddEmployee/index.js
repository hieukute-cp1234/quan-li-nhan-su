import React, { useEffect, useState } from "react";
import { Row, Col, Form, message } from "antd";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import Layout from "../../layouts/Layout";
import Header from "./Header";
import LeftForm from "./LeftForm";
import RightForm from "./RightForm";
import { fetchListPM, addUser } from "../../store/actions/userAction";
import { fetchAllLevels } from "../../store/actions/levelAction";
import { fetchAllRoles } from "../../store/actions/roleAction";
import { fetchAllSpecializes } from "../../store/actions/specializeAction";
import { fetchDataDepartment } from "../../store/actions/department";
import { fetchStaffTypes } from "../../store/actions/staffTypeAction";
import getFirstError from "../../helpers/getFirstError";
import { formatDate } from "../../helpers/formatDate";
import { Scroll } from "./styled";

const AddNewUser = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const history = useHistory();
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 24 },
  };

  const [listPM, setListPM] = useState([]);
  const [level, setLevel] = useState([]);
  const [role, setRole] = useState([]);
  const [specialize, setSpecialize] = useState([]);
  const [department, setDepartment] = useState([]);
  const [staffTypes, setStaffTypes] = useState([]);

  useEffect(() => {
    dispatch(
      fetchListPM(
        (data) => setListPM(data.data),
        (data) => onError(data)
      )
    );
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

  const convertId = (namePM) => {
    const myPM = listPM.filter((item) => item.name === namePM);
    return myPM[0].id;
  };

  const addNewUser = (value) => {
    const newData = {
      ...value,
      manager_id: convertId(value.manager_id),
      start_work: formatDate(value.start_work),
      date_of_birth: formatDate(value.date_of_birth),
    };
    for (const [key, val] of Object.entries(newData)) {
      if (!val) {
        delete newData[key];
      }
    }
    dispatch(
      addUser(
        newData,
        (data) => {
          message.success(`Email ${data.email} được thêm vào hệ thống!`, 2);
          history.push("/employees");
        },
        (data) => {
          message.error(getFirstError(data), 2);
        }
      )
    );
  };
  const goBack = () => {
    history.goBack();
  };
  return (
    <Layout>
      <Header rollBack={goBack} submitUser={form.submit} />
      <Scroll>
        <Form {...layout} name="basic" onFinish={addNewUser} form={form}>
          <Row style={{ marginTop: 50 }}>
            <Col span={8} offset={2}>
              <LeftForm />
            </Col>
            <Col span={8} offset={4}>
              <RightForm
                form={form}
                listPM={listPM}
                level={level}
                role={role}
                specialize={specialize}
                department={department}
                staffTypes={staffTypes}
              />
            </Col>
          </Row>
        </Form>
      </Scroll>
    </Layout>
  );
};

export default AddNewUser;
