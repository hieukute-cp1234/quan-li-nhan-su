import React from "react";
import { Modal, Form, Button } from "antd";
import { label } from "../../helpers/requiredMark";
import { LABEL, VALIDATED } from "../../constants/levels";
import { ButtonAddModal } from "../../components/buttonAddModal";
import { InputComponent, TextAreaComponent } from "../AddEmployee/styled";

const ModalComponent = (props) => {
  const { title, openPopup, handleCancel, onFinish, form, isUpdate } = props;

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

  return (
    <Modal
      title={title}
      visible={openPopup}
      onCancel={handleCancel}
      footer={null}
    >
      <Form {...layout} name="basic" form={form} onFinish={onFinish}>
        <Form.Item
          label={label(LABEL.NAME)}
          requiredMark="optional"
          name="name"
          rules={[{ required: true, message: VALIDATED.NAME }]}
        >
          <InputComponent disabled={isUpdate} />
        </Form.Item>

        <Form.Item label={LABEL.DESCRIPTION} name="description">
          <TextAreaComponent rows={3} />
        </Form.Item>

        <Form.Item
          label={label("Hệ số lương")}
          requiredMark="optional"
          name="salary_factor"
          rules={[{ required: true, message: "Hãy thêm hệ số lương!" }]}
        >
          <InputComponent type="number" />
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

export default ModalComponent;
