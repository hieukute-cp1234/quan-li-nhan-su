import { EditFilled } from "@ant-design/icons";
import { Button } from "antd";
import styled from "styled-components";

const ButtonComponent = styled(Button)`
  background-color: #fff;
  color: #42ce9f;
  border-radius: 8px;
  border: 1px solid #42ce9f;
  outline: none;
  padding: 0 8px;

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

const ButtonDetail = (props) => {
  const { handleEdit, isDisable } = props;
  return (
    <ButtonComponent
      icon={<EditFilled />}
      onClick={handleEdit}
      disabled={isDisable}
    >
      Sửa
    </ButtonComponent>
  );
};

export default ButtonDetail;
