import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Table, message, Form, Skeleton } from "antd";
import { MailOutlined } from "@ant-design/icons";

import Layout from "../../layouts/Layout";
import { columns } from "./columns";
import { WapperHeader, WapperTables } from "./styled";
import Search from "../../components/Search";
import { configData } from "../../helpers/search";
import ButtonAdd from "../../components/ButtonAdd";
import Popup from "./Modal";
import { ButtonComponent } from "./styled";

import {
  fetchListWage,
  addWage,
  sendMailSalary,
  updateSalary,
  delSalary,
  sendMailAll,
} from "../../store/actions/wage";
import getFirstError from "../../helpers/getFirstError";
import { configMonth, formatMonth } from "../../helpers/formatDate";
import { fetchLisUser } from "../../store/actions/userAction";
import { DateComponent } from "./styled";

const WagePage = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const [isShowModal, setShowModal] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [search, setSearch] = useState("");
  const [listWage, setListWage] = useState([]);
  const [listUser, setListUser] = useState([]);
  const [idWage, setIdWage] = useState(1);
  const [userId, setUserId] = useState(1);
  const [page, setPage] = useState(1);
  const [isDisable, setIsDisable] = useState(false);

  useEffect(() => {
    setLoading(true);
    getWage();
    dispatch(
      fetchLisUser(
        (data) => {
          setLoading(false);
          setListUser(data);
        },
        (data) => {
          setLoading(false);
        }
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getWage = () => {
    dispatch(
      fetchListWage(
        (data) => {
          setLoading(false);
          setListWage(data.data);
        },
        (data) => {
          setLoading(false);
          message.error(getFirstError(data?.error), 1);
        }
      )
    );
  };

  const handleSearch = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  const add = () => {
    form.resetFields();
    setIsUpdate(false);
    setShowModal(true);
  };

  const sendMail = (id) => {
    dispatch(
      sendMailSalary(
        id,
        (data) => onSuccessSendMail(data, id),
        (error) => onError(error)
      )
    );
  };

  const onSuccessSendMail = (data, id) => {
    message.success(data);
  };

  const onError = (error) => {
    message.error(getFirstError(error), 1);
    setLoading(false);
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  const onAddOrUpdate = (value) => {
    const userName = listUser.find((item) => item.name === value.user_id);
    if (isUpdate) {
      const newValue = {
        ...value,
        month_pay: formatMonth(value.month_pay),
        user_id: userId,
      };
      dispatch(
        updateSalary(
          idWage,
          newValue,
          (data) => {
            message.success(data, 2);
            getWage();
            setShowModal(false);
          },
          (data) => {
            onError(data);
          }
        )
      );
    } else {
      const newValue = {
        ...value,
        month_pay: formatMonth(value.month_pay),
        user_id: userName.id,
      };
      dispatch(
        addWage(
          newValue,
          (mess) => {
            message.success(mess, 2);
            getWage();
            setShowModal(false);
          },
          (error) => onError(error, 2)
        )
      );
    }
  };

  const openModalEdit = (id, data) => {
    setIdWage(id);
    setUserId(data.user_id);
    const newValue = {
      ...data,
      month_pay: configMonth(data.month_pay),
      user_id: data.user.name,
    };
    form.setFieldsValue(newValue);

    setIsUpdate(true);
    setShowModal(true);
  };

  const delWage = (id) => {
    dispatch(
      delSalary(
        id,
        (data) => {
          getWage();
          message.success("Xóa thành công!", 2);
        },
        (data) => {
          message.error(data, 2);
        }
      )
    );
  };

  const onSendMailALL = (value) => {
    const newValue = {
      date: formatMonth(value.date),
    };
    setIsDisable(true);
    dispatch(
      sendMailAll(
        newValue,
        (data) => {
          message.success(data, 2);
          setIsDisable(false);
        },
        (data) => {
          onError(data);
          setIsDisable(false);
        }
      )
    );
  };

  return (
    <Layout>
      <WapperHeader>
        <Search width={70} handleSearch={handleSearch} />
        <Form onFinish={onSendMailALL} className="send-all">
          <Form.Item
            label=""
            name="date"
            rules={[{ required: true, message: "Nhập tháng lương!" }]}
          >
            <DateComponent
              placeholder="Tháng"
              picker="month"
              format="MM/YYYY"
            />
          </Form.Item>

          <Form.Item>
            <ButtonComponent
              border={true}
              htmlType="submit"
              icon={<MailOutlined />}
              title="Gửi mail"
              disabled={isDisable}
            >
              Mail đồng loạt
            </ButtonComponent>
          </Form.Item>
        </Form>
        <ButtonAdd onClick={add} />
      </WapperHeader>
      <WapperTables>
        {isLoading ? (
          <Skeleton />
        ) : (
          <Table
            style={{ overflow: "auto" }}
            columns={columns(openModalEdit, sendMail, page, delWage)}
            dataSource={configData(search, listWage)}
            pagination={{
              size: "small",
              onChange: (page, _) => {
                setPage(page);
              },
            }}
            scroll={{
              scrollToFirstRowOnChange: true,
              y: 340,
            }}
          />
        )}
      </WapperTables>
      <Popup
        isUpdate={isUpdate}
        title={isUpdate ? "Sửa Lương" : "Thêm mới"}
        openPopup={isShowModal}
        handleCancel={handleCancel}
        form={form}
        onFinish={onAddOrUpdate}
        listUser={listUser}
      />
    </Layout>
  );
};

export default WagePage;
