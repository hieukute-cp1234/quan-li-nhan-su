import React, { useState } from "react";
import { Col, Form, Input, message } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { Wapper, LoginGoogle } from "./styled";
import GoogleLogin from "react-google-login";
import { GOOGLE_ID } from "../../configs/loginGG";
import google from "../../assets/image/gg.png";
import logo from "../../assets/image/login.png";
import { useDispatch } from "react-redux";
import { login, loginWithGoogle } from "../../store/actions/authActions";
import BoxButton from "./BoxButton";

const Login = () => {
  const dispatch = useDispatch();

  const [isLoading, setLoading] = useState(false);

  const onSuccess = (data) => {
    message.success(data.message, 2);
    sessionStorage.setItem("token", data.token);
    setLoading(false);
    window.location.href = "/";
  };

  const onError = (data) => {
    message.error(data.message, 2);
    setLoading(false);
  };

  const onFinish = (value) => {
    setLoading(true);
    dispatch(
      login(
        value,
        (data) => onSuccess(data),
        (data) => onError(data)
      )
    );
  };

  const responseLoginWithGoogle = (res) => {
    const data = {
      access_token: res.accessToken,
    };
    dispatch(
      loginWithGoogle(
        data,
        (data) => onSuccess(data),
        (error) => onError(error)
      )
    );
  };

  return (
    <Wapper align="middle">
      <Col span={8} offset={2}>
        <img src={logo} className="logo" alt="logo" href="#" />
      </Col>
      <Col className="col" span={7} offset={3}>
        <h1 className="title">Sign In With Account</h1>
        <Form
          name="basic"
          labelCol={{ span: 7 }}
          wrapperCol={{ span: 18, offset: 3 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          className="form"
        >
          <Form.Item
            name="email"
            rules={[
              { required: true, message: "" },
              { type: "email", message: "" },
            ]}
          >
            <Input
              prefix={<MailOutlined style={{ color: "rgb(66, 206, 159)" }} />}
              placeholder="Email"
              className="input"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              { required: true, message: "" },
              { min: 6, message: "" },
              { max: 50, message: "" },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined style={{ color: "rgb(66, 206, 159)" }} />}
              placeholder="Password"
              className="input"
            />
          </Form.Item>

          {/* <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox className="checkbox">Remember</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="http://localhost:3000/login">
              Forgot password
            </a>
          </Form.Item> */}

          <Form.Item wrapperCol={{ span: 24 }}>
            <BoxButton isLoading={isLoading} />
          </Form.Item>
        </Form>
        <hr color="black" size={1} />
        <h2 style={{ textAlign: "center", marginTop: 20 }}>
          Sign in with google
        </h2>
        <GoogleLogin
          className="button_google"
          clientId={GOOGLE_ID}
          onSuccess={responseLoginWithGoogle}
          onFailure={responseLoginWithGoogle}
          render={(renderProps) => (
            <LoginGoogle
              color="default"
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
              icon={
                <img
                  alt="Google"
                  title="Sign in with Google"
                  src={google}
                  className="logo"
                />
              }
            >
              Google
            </LoginGoogle>
          )}
          buttonText="Login"
          cookiePolicy={"single_host_origin"}
        />
      </Col>
    </Wapper>
  );
};

export default Login;
