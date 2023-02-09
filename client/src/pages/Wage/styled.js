import styled from "styled-components";
import { Button, DatePicker } from "antd";

const WapperHeader = styled.div`
  display: flex;
  justify-content: space-between;
  .header_search {
    width: 100%;
  }

  .send-all {
    display: flex;
    justify-content: space-around;
  }
`;

export const DateComponent = styled(DatePicker)`
  border: 1px solid rgb(66, 206, 159) !important;
  border-radius: 8px;
  width: 80% !important;
  margin-left: 15px;

  .ant-select-selector {
    border: none !important;
    background-color: transparent !important;
  }

  &:hover,
  &:focus {
    border: 1px solid rgb(66, 206, 159) !important;
    border-radius: 8px;
  }
`;

const ButtonComponent = styled(Button)`
  background-color: #fff;
  color: #42ce9f;
  border-radius: ${(props) => (props.border ? "8px" : "999px")};
  border: 1px solid #42ce9f;
  outline: none;
  padding: 0 8px;
  margin-right: 15px;

  &:hover {
    border: 1px solid #42ce9f;
    background-color: #42ce9f;
    color: #fff;
  }

  &:focus {
    border: 1px solid #42ce9f;
    background-color: #fff;
    color: #42ce9f;
  }
`;

const WapperTables = styled.div`
  margin-top: 20px;
`;

export { WapperHeader, WapperTables, ButtonComponent };
