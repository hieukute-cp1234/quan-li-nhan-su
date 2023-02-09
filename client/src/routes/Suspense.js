import React, { Suspense } from "react";
import { Skeleton } from "antd";
import PropTypes from "prop-types";

const SuspenseComponent = (props) => {
  const { page } = props;
  return <Suspense fallback={<Skeleton />}>{page}</Suspense>;
};

SuspenseComponent.propTypes = {
  page: PropTypes.node,
};

export default SuspenseComponent;
