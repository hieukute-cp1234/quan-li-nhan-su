import React from "react";
import { Input } from "antd";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wraper = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const BoxInput = ({ isUpdate, data }) => {
  return <Wraper>{isUpdate ? <Input /> : <span>{data}</span>}</Wraper>;
};

BoxInput.propTypes = {
  isUpdate: PropTypes.bool,
  data: PropTypes.string,
};

export default BoxInput;
