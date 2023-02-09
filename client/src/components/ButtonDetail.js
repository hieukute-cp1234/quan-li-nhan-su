import { EditFilled } from "@ant-design/icons";
import { Button } from "antd";
import styled from "styled-components";
import PropTypes from "prop-types";

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

const ButtonDelete = (props) => {
  const { handleEdit, isDisable } = props;
  return (
    <ButtonComponent
      icon={<EditFilled />}
      onClick={handleEdit}
      disabled={isDisable}
    >
      Chi tiết
    </ButtonComponent>
  );
};

ButtonDelete.propTypes = {
  handleEdit: PropTypes.func,
  titleTooltip: PropTypes.string,
};

export default ButtonDelete;
