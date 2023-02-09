import React from "react";
import { Modal, Form, Button, Select } from "antd";
import PropTypes from "prop-types";
import { label } from "../../helpers/requiredMark";
import { LABEL, VALIDATED } from "../../constants/deparments";
import { ButtonAddModal } from "../../components/buttonAddModal";
import {
  AutoComponent,
  InputComponent,
  TextAreaComponent,
} from "../AddEmployee/styled";

const MadalComponent = (props) => {
  const {
    title,
    openPopup,
    onFinish,
    handleCancel,
    isUpdate,
    form,
    listManager,
    handleSearch,
    handleChaneManager,
  } = props;
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

  const handleOptions = listManager.map((item) => (
    <Option key={item.id} value={item.name}>
      {item.name}
    </Option>
  ));

  return (
    <Modal
      title={title}
      visible={openPopup}
      onCancel={handleCancel}
      footer={null}
    >
      <Form {...layout} name="basic" form={form} onFinish={onFinish}>
        <Form.Item
          label={label(LABEL.CODE)}
          requiredMark="optional"
          name="code"
          rules={[{ required: true, message: VALIDATED.CODE }]}
        >
          <InputComponent disabled={isUpdate} />
        </Form.Item>

        <Form.Item
          label={label(LABEL.NAME)}
          requiredMark="optional"
          name="name"
          rules={[{ required: true, message: VALIDATED.NAME }]}
        >
          <InputComponent />
        </Form.Item>

        <Form.Item
          label={label(LABEL.MANAGER)}
          requiredMark="optional"
          name="head_of_department_id"
          rules={[
            {
              required: true,
              message: VALIDATED.MANAGER,
            },
          ]}
        >
          <AutoComponent
            style={{
              width: "70%",
            }}
            placeholder="Tìm kiếm theo tên..."
            onSearch={handleSearch}
            onChange={handleChaneManager}
          >
            {handleOptions}
          </AutoComponent>
        </Form.Item>

        <Form.Item label={LABEL.DESCRIPTION} name="description">
          <TextAreaComponent rows={3} />
        </Form.Item>

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
  listManager: PropTypes.array,
  handleSearch: PropTypes.func,
  handleChaneManager: PropTypes.func,
};

export default MadalComponent;
