import React, { useEffect, useState } from "react";
import { Table, message, Form, Skeleton } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import Layout from "../../layouts/Layout";
import Search from "../../components/Search";
import Popup from "./Modal";
import { WapperHeader, WapperTables } from "./styled";
import { columns } from "./columns";
import { configData } from "../../helpers/search";
import {
  fetchAddRole,
  fetchUpdateRole,
  fetchAllRoles,
  deleteRole,
} from "../../store/actions/roleAction";
import getFirstError from "../../helpers/getFirstError";
import { LABEL } from "../../constants/roles";
import ButtonAdd from "../../components/ButtonAdd";
import { decentralizationAdmin } from "../../helpers/customRole";
import { openNutification } from "../../helpers/nutification";
import ModalDetailUser from "../../components/ModalDetail";
import { fetchLisUser, setUserById } from "../../store/actions/userAction";
import { fetchDataDepartment } from "../../store/actions/department";

const Role = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [form] = Form.useForm();

  const roleByUser = useSelector((state) => state.auth.profile.role_id);

  const [listRole, setListRole] = useState([]);
  const [search, setSearch] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [currentRoleId, setCurrentRoleId] = useState("");
  const [isPopupDetail, setIsPopupDetail] = useState(false);
  const [listAllUser, setListAllUser] = useState([]);
  const [listUserByRole, setListUserByRole] = useState([]);
  const [allDepartment, setAllDepartment] = useState([]);
  const [nameRole, setNameRole] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchRoles();
    dispatch(
      fetchLisUser(
        (data) => {
          setListAllUser(data);
        },
        (data) => {
          onError(data);
        }
      )
    );
    dispatch(
      fetchDataDepartment(
        (data) => setAllDepartment(data),
        (data) => onError(data)
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchRoles = () => {
    setLoading(true);
    dispatch(
      fetchAllRoles(
        (data) => onSuccess(data),
        (error) => onError(error)
      )
    );
  };

  const onSuccess = (data) => {
    setLoading(false);
    setListRole(data);
  };

  const onError = (error) => {
    message.error(getFirstError(error), 1);
    setLoading(false);
  };

  const handleSearch = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  const add = () => {
    form.resetFields();
    setIsShowModal(true);
    setIsUpdate(false);
  };

  const edit = (id, data) => {
    setCurrentRoleId(id);
    form.setFieldsValue({
      name: data.name,
      description: data.description,
      salary_factor: data.salary_factor,
    });
    setIsShowModal(true);
    setIsUpdate(true);
  };

  const delRole = (id) => {
    dispatch(
      deleteRole(
        id,
        (data) => {
          message.success(data, 2);
          fetchRoles();
        },
        (data) => {
          openNutification(data);
        }
      )
    );
  };

  const handleCancel = () => {
    setIsPopupDetail(false);
    setIsShowModal(false);
  };

  const onAddOrUpdate = (value) => {
    if (isUpdate) {
      dispatch(
        fetchUpdateRole(
          currentRoleId,
          value,
          (mess) => {
            message.success(mess);
            fetchRoles();
            setIsShowModal(false);
          },
          (error) => onError(error)
        )
      );
    } else {
      dispatch(
        fetchAddRole(
          value,
          (mess) => {
            message.success(mess);
            fetchRoles();
            setIsShowModal(false);
          },
          (error) => onError(error)
        )
      );
    }
  };

  const openModalDetail = (name, id) => {
    const newValue = listAllUser.filter(
      (user) => user.role_id === id && user.work_status === 1
    );
    setListUserByRole(newValue);
    setNameRole(name);
    setIsPopupDetail(true);
  };

  const detailUser = (idUser) => {
    dispatch(setUserById(idUser));
    history.push("/detail-employee");
  };

  return (
    <Layout>
      <WapperHeader>
        <Search width={80} handleSearch={handleSearch} />
        <ButtonAdd
          onClick={add}
          isDisable={decentralizationAdmin(roleByUser)}
        />
      </WapperHeader>
      <WapperTables>
        {isLoading ? (
          <Skeleton />
        ) : (
          <Table
            style={{ overflow: "auto" }}
            columns={columns(
              edit,
              delRole,
              openModalDetail,
              decentralizationAdmin(roleByUser),
              page
            )}
            dataSource={configData(search, listRole)}
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
        title={isUpdate ? LABEL.POPUP_EDIT : LABEL.POPUP_ADD}
        openPopup={isShowModal}
        handleCancel={handleCancel}
        form={form}
        isUpdate={isUpdate}
        onFinish={onAddOrUpdate}
      />
      <ModalDetailUser
        title={nameRole}
        openPopup={isPopupDetail}
        handleCancel={handleCancel}
        isDepartment={false}
        detail={detailUser}
        data={listUserByRole}
        allDepartment={allDepartment}
      />
    </Layout>
  );
};

export default Role;
