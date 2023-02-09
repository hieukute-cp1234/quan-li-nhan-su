import styled from "styled-components";
import { Input, Select, InputNumber, DatePicker, AutoComplete } from "antd";

const { TextArea } = Input;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;

  button {
    cursor: pointer;
    border: none;
    outline: none;
    padding: 5px 15px;
    border-radius: 5px;
  }

  .btn-submit {
    background-color: #42ce9f;
    color: #fff;
  }
`;

export const InputComponent = styled(Input)`
  border: 1px solid rgb(66, 206, 159);
  border-radius: 8px;
  outline: none !important;

  &:hover,
  &:focus {
    border: 1px solid rgb(66, 206, 159) !important;
    border-radius: 8px;
  }
`;

export const TextAreaComponent = styled(TextArea)`
  border: 1px solid rgb(66, 206, 159);
  border-radius: 8px;
  outline: none !important;

  &:hover,
  &:focus {
    border: 1px solid rgb(66, 206, 159) !important;
    border-radius: 8px;
  }
`;

export const NumberComponent = styled(InputNumber)`
  border: 1px solid rgb(66, 206, 159);
  border-radius: 8px;
  outline: none !important;

  &:hover,
  &:focus {
    border: 1px solid rgb(66, 206, 159) !important;
    border-radius: 8px;
  }
`;

export const SelectComponent = styled(Select)`
  border: 1px solid rgb(66, 206, 159) !important;
  border-radius: 8px;
  width: ${(props) => (props.isWidth ? "80%" : "60%")} !important;

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

export const AutoComponent = styled(AutoComplete)`
  border: 1px solid rgb(66, 206, 159) !important;
  border-radius: 8px;

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

export const DateComponent = styled(DatePicker)`
  border: 1px solid rgb(66, 206, 159) !important;
  border-radius: 8px;
  width: 50% !important;

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

export const Scroll = styled.div`
  overflow: auto;
  margin-top: 10px;
  height: ${(props) => (props.isEdit ? "350px" : "450px")};

  &::-webkit-scrollbar-thumb {
    width: 5px;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 99px;
  }

  &::-webkit-scrollbar {
    width: 5px;
    border-radius: 99px;
  }
`;
