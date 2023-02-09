import React from "react";
import { Modal, Form, Input, Button, Select, DatePicker } from "antd";
import PropTypes from "prop-types";
import { LABEL, VALIDATED } from "../../constants/deparments";
import { ButtonAddModal } from "../../components/buttonAddModal";

const MadalComponent = (props) => {
  const { title, openPopup, onFinish, handleCancel, isUpdate, form } = props;

  const { Option } = Select;
  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
  };

  const tailLayout = {
    wrapperCol: {
      offset: 6,
      span: 16,
    },
  };

  const renderTitle = () => (
    <p style={{ textAlign: "center", marginBottom: 0 }}>{title}</p>
  );

  return (
    <Modal
      title={renderTitle()}
      visible={openPopup}
      onCancel={handleCancel}
      footer={null}
    >
      <Form {...layout} name="basic" form={form} onFinish={onFinish}>
        {isUpdate ? (
          ""
        ) : (
          <>
            <Form.Item
              label="Tên nhân viên"
              requiredMark="optional"
              name="code"
              rules={[{ required: true, message: VALIDATED.NAME }]}
            >
              <Input />
            </Form.Item>

            <Form.Item label="Email" name="email">
              <Input />
            </Form.Item>
          </>
        )}

        <Form.Item
          label="Ngày sinh"
          requiredMark="optional"
          name="date_of_birth"
          rules={[{ required: true, message: VALIDATED.NAME }]}
        >
          <DatePicker />
        </Form.Item>

        <Form.Item
          label="Chuyên môn"
          requiredMark="optional"
          name="specialize"
          rules={[{ required: true, message: VALIDATED.NAME }]}
        >
          <Select style={{ width: "50%" }}>
            <Option value={0}>Front end</Option>
            <Option value={1}>Back end</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Trình độ"
          requiredMark="optional"
          name="level"
          rules={[{ required: true, message: VALIDATED.NAME }]}
        >
          <Select style={{ width: "50%" }}>
            <Option value={0}>PM</Option>
            <Option value={1}>Fresher</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Mức Lương"
          requiredMark="optional"
          name="wage"
          rules={[
            {
              required: true,
              message: VALIDATED.MANAGER,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Bộ phận" name="department">
          <Select style={{ width: "40%" }}>
            <Option value={0}>HB1</Option>
            <Option value={1}>HB2</Option>
            <Option value={2}>HB3</Option>
            <Option value={3}>HB4</Option>
          </Select>
        </Form.Item>

        {isUpdate ? (
          <Form.Item
            label="Trạng thái"
            requiredMark="optional"
            name="status"
            rules={[{ required: true, message: VALIDATED.NAME }]}
          >
            <Select style={{ width: "40%" }}>
              <Option value={0}>ACTIVE</Option>
              <Option value={1}>IN ACTIVE</Option>
            </Select>
          </Form.Item>
        ) : (
          ""
        )}

        <Form.Item {...tailLayout}>
          <Button type="default" onClick={handleCancel}>
            Hủy bỏ
          </Button>
          <ButtonAddModal
            title={isUpdate ? LABEL.BUTTON_EDIT : LABEL.BUTTON_ADD}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

MadalComponent.propTypes = {
  title: PropTypes.string,
  openPopup: PropTypes.bool,
  handleCancel: PropTypes.func,
  data: PropTypes.object,
  onFinish: PropTypes.func,
  isUpdate: PropTypes.bool,
};

export default MadalComponent;
