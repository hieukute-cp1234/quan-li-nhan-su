import styled from "styled-components";
import { Button } from "antd";

const WapperHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${(props) => (props.isEdit ? "padding: 20px 40px 40px;" : "")}

  .box_avatar {
    display: flex;
    align-items: center;

    .name {
      font-size: 20px;
      font-weight: bold;
      margin-left: 10px;
    }

    .gender {
      margin: -20px 0 0 10px;
    }
  }
`;

const ButtonUpdate = styled(Button)`
  background-color: #fff;
  color: #42ce9f;
  border-radius: 5px;
  border: 1px solid #42ce9f;
  outline: none;
  padding: 0 12px;

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

export { WapperHeader, ButtonUpdate };
