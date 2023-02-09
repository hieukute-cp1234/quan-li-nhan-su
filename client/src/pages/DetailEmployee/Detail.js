import React, { useState, useEffect } from "react";
import { Form, message, Skeleton } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../layouts/Layout";
import Header from "./Header";
import Content from "./Content";
import PopupEdit from "./Edit";
import { configDate, formatDate } from "../../helpers/formatDate";
import * as customEmployee from "../../helpers/employee";
import { updateUser, fetchUserById } from "../../store/actions/userAction";
import { roleByAdminAndManage } from "../../helpers/customRole";
import getFirstError from "../../helpers/getFirstError";

const DetailEmployee = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const [isOpenPopup, setOpenPopup] = useState(false);
  const [detaiUser, setDetailUser] = useState({});
  const [isLoading, setLoading] = useState(false);
  const userById = useSelector((state) => state.user.userById);
  const roleByUser = useSelector((state) => state.auth.profile.role_id);
  const getMe = useSelector((state) => state.auth.profile);
  const listPM = useSelector((state) => state.user.listPM);
  const isChangeUser =
    roleByAdminAndManage(roleByUser) || userById === getMe.id;

  useEffect(() => {
    getUserById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpenPopup === false]);

  const getUserById = () => {
    setLoading(true);
    dispatch(
      fetchUserById(
        userById,
        (data) => {
          setDetailUser(data.data);
          setLoading(false);
        },
        (data) => {
          message.error(getFirstError(data?.error), 1);
        }
      )
    );
  };

  const openPopup = () => {
    setOpenPopup(true);
    const fieldsValue = {
      ...detaiUser,
      date_of_birth: configDate(detaiUser?.date_of_birth),
      manager_id: detaiUser.manager.name,
      start_work: configDate(detaiUser?.start_work),
    };
    form.setFieldsValue(fieldsValue);
  };

  const closePopup = () => {
    setOpenPopup(false);
    form.resetFields();
  };

  const onFinish = (value) => {
    const PMByUser = listPM.find((pm) => pm.name === value.manager_id);
    const newValue = {
      ...value,
      manager_id: PMByUser?.id || 1,
      start_work: formatDate(value?.start_work),
      date_of_birth: formatDate(value?.date_of_birth),
    };
    for (const [key, val] of Object.entries(newValue)) {
      if (!val) {
        delete newValue[key];
      }
    }
    dispatch(
      updateUser(
        userById,
        newValue,
        (data) => {
          message.success("Cập nhật thông tin thành công !", 2);
          setOpenPopup(false);
        },
        (data) => {
          message.error(getFirstError(data?.error), 1);
        }
      )
    );
  };

  return (
    <Layout>
      {isLoading ? (
        <Skeleton />
      ) : (
        <>
          <Header
            name={detaiUser.name}
            gender={customEmployee.customGener(detaiUser.gender)}
            edit={openPopup}
            isDisable={!isChangeUser}
            profile={detaiUser}
          />
          <Content data={detaiUser} />
        </>
      )}

      <PopupEdit
        onClose={closePopup}
        visible={isOpenPopup}
        form={form}
        isMe={detaiUser.id === getMe.id}
        openPopupEdit
        onFinish={onFinish}
        isEdit={true}
        onSubmit={form.submit}
        name={detaiUser.name}
        gender={customEmployee.customGener(detaiUser.gender)}
        profile={detaiUser}
      />
    </Layout>
  );
};

export default DetailEmployee;
