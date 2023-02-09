import React, { useState, useEffect } from "react";
import { Row, Col, message } from "antd";
import {
  RightCircleOutlined,
  UserOutlined,
  BankOutlined,
  SolutionOutlined,
  ScheduleOutlined,
} from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import Layout from "../../layouts/Layout";
import { WrapperHome, WrapperDetail } from "./styled";
import { countDepartment, countUser } from "../../store/actions/count";
import { fetchLisUser } from "../../store/actions/userAction";
import { fetchAllSpecializes } from "../../store/actions/specializeAction";
import getFirstError from "../../helpers/getFirstError";

const Home = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [userAmount, setUserAmount] = useState(0);
  const [departmentAmount, setDepartmentAmount] = useState(0);
  const [listUser, setListUser] = useState([]);
  const [specialize, setSpecialize] = useState([]);

  useEffect(() => {
    dispatch(
      countDepartment(
        (data) => {
          setDepartmentAmount(data.data);
        },
        (data) => {
          onError(data);
        }
      )
    );
    dispatch(
      countUser(
        (data) => {
          setUserAmount(data.data);
        },
        (data) => {
          onError(data);
        }
      )
    );
    dispatch(
      fetchLisUser(
        (data) => {
          setListUser(data);
        },
        (data) => {
          onError(data);
        }
      )
    );
    dispatch(
      fetchAllSpecializes(
        (data) => setSpecialize(data),
        (error) => onError(error)
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onError = (data) => {
    message.error(getFirstError(data?.error), 1);
  };

  const userInActive = () => {
    const newData = listUser.filter((item) => item.work_status === 2);
    return newData.length;
  };

  const redirectPage = (key) => {
    switch (key) {
      case "deparments":
        return history.push("/deparments");
      case "employees":
        return history.push("/employees");
      case "staff-types":
        return history.push("/staff-types");
      case "specializes":
        return history.push("/specializes");
      default:
        return;
    }
  };
  return (
    <Layout>
      <Row style={{ marginTop: 30 }}>
        <Col span={10} offset={1}>
          <WrapperHome style={{ backgroundColor: "#ea4b4b" }}>
            <span className="number">{userAmount}</span>
            <br />
            <span className="text">Nhân Viên</span>
            <UserOutlined
              style={{
                margin: "-60px 0 0 30%",
                fontSize: 150,
                position: "absolute",
                color: "rgba(0 ,0 ,0 ,0.4)",
              }}
            />
            <WrapperDetail
              style={{ backgroundColor: "rgba(0 ,0 ,0 ,0.3)" }}
              onClick={() => redirectPage("employees")}
            >
              <div>
                <span>Danh sách nhân viên</span>
                <RightCircleOutlined style={{ marginLeft: 5 }} />
              </div>
            </WrapperDetail>
          </WrapperHome>
        </Col>
        <Col span={10} offset={3} pull={1}>
          <WrapperHome
            style={{
              backgroundColor: "#f7b50e",
              backgroundImage: "",
            }}
          >
            <span className="number">{departmentAmount}</span>
            <br />
            <span className="text">Phòng ban</span>
            <BankOutlined
              style={{
                margin: "-60px 0 0 29%",
                fontSize: 150,
                position: "absolute",
                color: "rgba(0 ,0 ,0 ,0.4)",
              }}
            />
            <WrapperDetail
              style={{ backgroundColor: "rgba(0 ,0 ,0 ,0.3)" }}
              onClick={() => redirectPage("deparments")}
            >
              <div>
                <span>Danh sách phòng ban</span>
                <RightCircleOutlined style={{ marginLeft: 5 }} />
              </div>
            </WrapperDetail>
          </WrapperHome>
        </Col>
      </Row>
      <Row style={{ marginTop: 60 }}>
        <Col span={10} offset={1}>
          <WrapperHome style={{ backgroundColor: "#13efe8" }}>
            <span className="number">{userInActive()}</span>
            <br />
            <span className="text">Nhân viên đã nghỉ</span>
            <SolutionOutlined
              style={{
                margin: "-60px 0 0 15%",
                fontSize: 150,
                position: "absolute",
                color: "rgba(0 ,0 ,0 ,0.4)",
              }}
            />
            <WrapperDetail
              style={{ backgroundColor: "rgba(0 ,0 ,0 ,0.3)" }}
              onClick={() => redirectPage("specializes")}
            >
              <div>
                <span>Xem nhân viên</span>
                <RightCircleOutlined style={{ marginLeft: 5 }} />
              </div>
            </WrapperDetail>
          </WrapperHome>
        </Col>
        <Col span={10} offset={3} pull={1}>
          <WrapperHome style={{ backgroundColor: "#42ce9f" }}>
            <span className="number">{specialize?.length}</span>
            <br />
            <span className="text">Job</span>
            <ScheduleOutlined
              style={{
                margin: "-60px 0 0 32%",
                fontSize: 150,
                position: "absolute",
                color: "rgba(0 ,0 ,0 ,0.4)",
              }}
            />
            <WrapperDetail
              style={{ backgroundColor: "rgba(0 ,0 ,0 ,0.3)" }}
              onClick={() => redirectPage("specializes")}
            >
              <div>
                <span>Xem các job</span>
                <RightCircleOutlined style={{ marginLeft: 5 }} />
              </div>
            </WrapperDetail>
          </WrapperHome>
        </Col>
      </Row>
    </Layout>
  );
};

export default Home;
