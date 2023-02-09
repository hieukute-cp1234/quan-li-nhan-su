import { DeleteFilled } from "@ant-design/icons";
import { Button, Tooltip } from "antd";
import styled from "styled-components";

const ButtonComponent = styled(Button)`
  background-color: #ff2323;
  color: #fff;
  border-radius: 999px;
  border: 1px solid #ff2323;
  outline: none;
  padding: 0 8px;

  &:hover {
    content: "Xóa";
    border: 1px solid #ff2323;
    background-color: #fff;
    color: #ff2323;
  }

  &:focus {
    border: 1px solid #ff2323;
    background-color: #ff2323;
    color: #fff;
  }
`;

const ButtonDetail = (props) => {
  const { handleDelete, isDisable, title } = props;
  return (
    <Tooltip placement="top" title={title}>
      <ButtonComponent
        icon={<DeleteFilled />}
        onClick={handleDelete}
        disabled={isDisable}
      />
    </Tooltip>
  );
};

export default ButtonDetail;
