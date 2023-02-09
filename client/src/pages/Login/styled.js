import styled from "styled-components";
import { Row, Button } from "antd";
import Background from "../../assets/image/backg.jpeg";

export const Wapper = styled(Row)`
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${Background});

  .col {
    border-radius: 10px;
    box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.4);
    padding: 50px 40px;
    background-color: rgba(255, 255, 255, 1);
  }

  .form {
    margin-top: 50px;
  }

  .title {
    text-align: center;
  }

  .button {
    background-color: rgba(66, 206, 159, 0.8);
    border: none;
    border-radius: 999px;
    margin-bottom: 10px;
    color: #fff;
    width: 45%;
    text-align: center;
    font-weight: 700;

    &:hover {
      background-color: rgba(66, 206, 159, 1);
      color: #fff;
    }
  }

  .logo {
    width: 100%;
  }

  .button_google {
    text-align: center;
  }

  .input {
    border: 2px solid rgb(66, 206, 159);
    border-radius: 999px;

    &:hover {
      border: 2px solid rgb(66, 206, 159) !important;
      border-radius: 999px;
    }
  }

  .box_button-action {
    display: flex;
    justify-content: center;
  }

  .login-form-forgot {
    float: right;
    color: rgb(66, 206, 159);
  }

  .checkbox {
    border-color: rgb(66, 206, 159);
  }
`;

export const LoginGoogle = styled(Button)`
  border: 1px solid rgb(65, 65, 67);
  border-radius: 5px;
  margin-left: 35%;
  margin-top: 10px;
  background-color: #fff;
  color: black;
  &:hover {
    background-color: #fff;
    color: black;
    border: 1px solid rgb(65, 65, 67);
  }

  &:focus {
    background-color: #fff;
    color: black;
    border: 1px solid rgb(65, 65, 67);
  }

  .logo {
    width: 20px;
    margin-right: 5px;
  }
`;

export const Forgot = styled.a`
  text-align: center;
`;
