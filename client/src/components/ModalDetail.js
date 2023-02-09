import React from "react";
import { Modal } from "antd";
import styled from "styled-components";
import { employeeCode } from "../helpers/employee";
import { findRoleById } from "../helpers/customRole";
import { findDepartmentsById } from "../helpers/department";

const WrapperContent = styled.div`
  overflow: auto;
  height: 300px;

  &::-webkit-scrollbar-thumb {
    width: 5px;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 99px;
  }

  &::-webkit-scrollbar {
    width: 5px;
    border-radius: 99px;
  }

  .item {
    padding: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;

    &:hover {
      background-color: rgba(66, 206, 159, 0.4);
      color: rgba(0, 0, 0, 0.8);
    }

    .item-code {
      font-weight: bold;
      font-size: 16px;
      width: 60%;
      text-align: center;
    }

    .item-text {
      text-align: center;
      width: 40%;
    }
  }
`;

const ModalDetail = (props) => {
  const {
    title,
    openPopup,
    handleCancel,
    isDepartment,
    detail,
    data,
    allRole,
    allDepartment,
  } = props;
  return (
    <Modal
      title={<h3 style={{ textAlign: "center" }}>{title}</h3>}
      visible={openPopup}
      onCancel={handleCancel}
      footer={null}
      style={{ top: 100 }}
    >
      <WrapperContent>
        {data.map((item) =>
          isDepartment ? (
            <div className="item" onClick={() => detail(item.id)}>
              <div className="item-code">{employeeCode(item.email)}</div>
              <div className="item-text">
                {findRoleById(allRole, item.role_id)}
              </div>
            </div>
          ) : (
            <div className="item" onClick={() => detail(item.id)}>
              <div className="item-code">{employeeCode(item.email)}</div>
              <div className="item-text">
                {findDepartmentsById(allDepartment, item.department_id)}
              </div>
            </div>
          )
        )}
      </WrapperContent>
    </Modal>
  );
};

export default ModalDetail;
