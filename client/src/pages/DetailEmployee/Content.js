import React from "react";
import { Descriptions, Badge } from "antd";
import * as helperEmployee from "../../helpers/employee";

const Content = ({ data }) => {
  return (
    <Descriptions style={{ marginTop: 50 }} bordered>
      <Descriptions.Item label={<span style={{ fontWeight: 500 }}>Email</span>}>
        {data?.email || ""}
      </Descriptions.Item>
      <Descriptions.Item
        label={<span style={{ fontWeight: 500 }}>Số điện thoại</span>}
      >
        {data?.phone || ""}
      </Descriptions.Item>
      <Descriptions.Item
        label={<span style={{ fontWeight: 500 }}>Ngày sinh</span>}
      >
        {data?.date_of_birth || ""}
      </Descriptions.Item>

      <Descriptions.Item
        label={<span style={{ fontWeight: 500 }}>Mã nhân viên</span>}
      >
        {helperEmployee.employeeCode(data.email)}
      </Descriptions.Item>
      <Descriptions.Item
        label={<span style={{ fontWeight: 500 }}>Địa chỉ</span>}
        span={2}
      >
        {data?.address || ""}
      </Descriptions.Item>

      <Descriptions.Item
        label={<span style={{ fontWeight: 500 }}>Bộ phận</span>}
      >
        {data.department?.name || ""}
      </Descriptions.Item>
      <Descriptions.Item
        label={<span style={{ fontWeight: 500 }}>Căn cước</span>}
      >
        {data?.card_id || ""}
      </Descriptions.Item>
      <Descriptions.Item
        label={<span style={{ fontWeight: 500 }}>Ngày làm việc</span>}
      >
        {data?.start_work || ""}
      </Descriptions.Item>

      <Descriptions.Item
        label={<span style={{ fontWeight: 500 }}>Trưởng bộ phận</span>}
      >
        {data.manager?.name || "Chưa có bộ phận"}
      </Descriptions.Item>
      <Descriptions.Item
        label={<span style={{ fontWeight: 500 }}>Tình trạng hôn nhân</span>}
        span={2}
      >
        {helperEmployee.maritalStatus(data.marital_status)}
      </Descriptions.Item>

      <Descriptions.Item
        label={<span style={{ fontWeight: 500 }}>Chuyên môn</span>}
      >
        {data.specialize?.name || ""}
      </Descriptions.Item>
      <Descriptions.Item
        label={<span style={{ fontWeight: 500 }}>Nhân viên hình thức</span>}
        span={2}
      >
        {data.type?.name || ""}
      </Descriptions.Item>

      <Descriptions.Item
        label={<span style={{ fontWeight: 500 }}>Trình độ</span>}
      >
        {data.level?.name || ""}
      </Descriptions.Item>
      <Descriptions.Item
        label={<span style={{ fontWeight: 500 }}>Status</span>}
        span={2}
      >
        <Badge
          status={data.status === 1 ? "processing" : "default"}
          text={helperEmployee.status(data.work_status)}
        />
      </Descriptions.Item>
    </Descriptions>
  );
};

export default Content;
