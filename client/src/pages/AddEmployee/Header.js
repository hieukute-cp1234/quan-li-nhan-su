import React from "react";
import { Row, Col } from "antd";
import { Wrapper } from "./styled";

const HeaderAddNewUser = ({ rollBack, submitUser }) => {
  return (
    <Row>
      <Col span={6} offset={18}>
        <Wrapper>
          <button className="btn-back" onClick={rollBack}>
            Danh sách nhân viên
          </button>
          <button className="btn-submit" onClick={submitUser}>
            Lưu
          </button>
        </Wrapper>
      </Col>
    </Row>
  );
};

export default HeaderAddNewUser;
