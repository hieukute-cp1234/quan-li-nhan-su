import { Button } from "antd";
import styled from "styled-components";

const ButtonComponent = styled(Button)`
  background-color: #42ce9f;
  color: #fff;
  border-radius: 3px;
  border: 1px solid #42ce9f;
  outline: none;
  padding: 0 12px;

  &:hover,
  &:focus {
    border: 1px solid #42ce9f;
    background-color: #42ce9f;
    color: #fff;
  }
`;

export const ButtonAddModal = ({ title }) => {
  return (
    <ButtonComponent htmlType="submit" style={{ marginLeft: 100 }}>
      {title}
    </ButtonComponent>
  );
};
