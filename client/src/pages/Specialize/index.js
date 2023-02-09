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
import getFirstError from "../../helpers/getFirstError";
import {
  fetchAllSpecializes,
  fetchAddSpecialize,
  fetchUpdateSpecialize,
  deleteSpecialize,
} from "../../store/actions/specializeAction";
import { LABEL } from "../../constants/specializes";
import ButtonAdd from "../../components/ButtonAdd";
import { decentralizationAdmin } from "../../helpers/customRole";
import { openNutification } from "../../helpers/nutification";

import ModalDetailUser from "../../components/ModalDetail";
import { fetchLisUser, setUserById } from "../../store/actions/userAction";
import { fetchDataDepartment } from "../../store/actions/department";

const Specialize = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [form] = Form.useForm();

  const roleByUser = useSelector((state) => state.auth.profile.role_id);

  const [listSpecializes, setListSpecializes] = useState([]);
  const [search, setSearch] = useState("");
  const [isShowModal, setIsShowModal] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isPopupDetail, setIsPopupDetail] = useState(false);
  const [listAllUser, setListAllUser] = useState([]);
  const [listUserBySpecialize, setListUserBySpecialize] = useState([]);
  const [allDepartment, setAllDepartment] = useState([]);
  const [nameSpecialize, setNameSpecialize] = useState("");
  const [currentSpecializeId, setCurrentSpecializeId] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchSpecializes();
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

  const onSuccess = (data) => {
    setLoading(false);
    setListSpecializes(data);
  };

  const onError = (error) => {
    setLoading(false);
    message.error(getFirstError(error));
  };

  const fetchSpecializes = () => {
    setLoading(true);
    dispatch(
      fetchAllSpecializes(
        (data) => onSuccess(data),
        (error) => onError(error)
      )
    );
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
    setCurrentSpecializeId(id);
    form.setFieldsValue({
      name: data.name,
      description: data.description,
      salary_factor: data.salary_factor,
    });
    setIsUpdate(true);
    setIsShowModal(true);
  };

  const delSpecialize = (id) => {
    dispatch(
      deleteSpecialize(
        id,
        (data) => {
          message.success(data, 2);
          fetchSpecializes();
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
        fetchUpdateSpecialize(
          currentSpecializeId,
          value,
          (mess) => {
            message.success(mess);
            fetchSpecializes();
            setIsShowModal(false);
          },
          (error) => onError(error)
        )
      );
    } else {
      dispatch(
        fetchAddSpecialize(
          value,
          (mess) => {
            message.success(mess);
            fetchSpecializes();
            setIsShowModal(false);
          },
          (error) => onError(error)
        )
      );
    }
  };

  const openModalDetail = (name, id) => {
    const newValue = listAllUser.filter(
      (user) => user.specialize_id === id && user.work_status === 1
    );
    setListUserBySpecialize(newValue);
    setNameSpecialize(name);
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
              delSpecialize,
              openModalDetail,
              decentralizationAdmin(roleByUser),
              page
            )}
            dataSource={configData(search, listSpecializes)}
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
        isUpdate={isUpdate}
        handleCancel={handleCancel}
        form={form}
        onFinish={onAddOrUpdate}
      />
      <ModalDetailUser
        title={nameSpecialize}
        openPopup={isPopupDetail}
        handleCancel={handleCancel}
        isDepartment={false}
        detail={detailUser}
        data={listUserBySpecialize}
        allDepartment={allDepartment}
      />
    </Layout>
  );
};

export default Specialize;
