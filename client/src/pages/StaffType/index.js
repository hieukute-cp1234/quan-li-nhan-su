import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, message, Form, Skeleton } from "antd";
import { useHistory } from "react-router-dom";

import Layout from "../../layouts/Layout";
import Search from "../../components/Search";
import Popup from "./Modal";
import { WapperHeader, WapperTables } from "./styled";
import { LABEL } from "../../constants/stafftypes";
import getFirstError from "../../helpers/getFirstError";
import { columns } from "./columns";
import {
  fetchStaffTypes,
  fetchUpdateStaffTypes,
  fetchAddStaffTypes,
  deleteStaffType,
} from "../../store/actions/staffTypeAction";
import { configData } from "../../helpers/search";
import ButtonAdd from "../../components/ButtonAdd";
import { openNutification } from "../../helpers/nutification";
import { decentralizationAdmin } from "../../helpers/customRole";
import ModalDetailUser from "../../components/ModalDetail";
import { fetchLisUser, setUserById } from "../../store/actions/userAction";
import { fetchDataDepartment } from "../../store/actions/department";

const StaffType = () => {
  const [form] = Form.useForm();
  const history = useHistory();
  const dispatch = useDispatch();

  const roleByUser = useSelector((state) => state.auth.profile.role_id);

  const [isUpdate, setIsUpdate] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isPopupDetail, setIsPopupDetail] = useState(false);
  const [listStaffTypes, setListStaffTypes] = useState([]);
  const [listAllUser, setListAllUser] = useState([]);
  const [listUserByStaffType, setListUserByStaffType] = useState([]);
  const [allDepartment, setAllDepartment] = useState([]);
  const [nameStaffType, setNameStaffType] = useState("");
  const [search, setSearch] = useState("");
  const [currentStaffTypeId, setCurrentStaffTypeId] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchAllStaffTypes();
    dispatch(
      fetchLisUser(
        (data) => {
          setListAllUser(data);
        },
        (data) => {
          message.error(getFirstError(data?.error), 1);
        }
      )
    );
    dispatch(
      fetchDataDepartment(
        (data) => setAllDepartment(data),
        (data) => message.error(getFirstError(data?.error), 1)
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onError = (error) => {
    setLoading(false);
    message.error(getFirstError(error));
  };

  const onSuccessFetchStaffTypes = (data) => {
    setLoading(false);
    setListStaffTypes([...data]);
  };

  const fetchAllStaffTypes = () => {
    setLoading(true);
    dispatch(
      fetchStaffTypes(
        (data) => onSuccessFetchStaffTypes(data),
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

  const handleCancel = () => {
    setIsPopupDetail(false);
    setIsShowModal(false);
  };

  const edit = (id, data) => {
    setCurrentStaffTypeId(id);
    form.setFieldsValue({
      code: data.code,
      name: data.name,
      salary_factor: data.salary_factor,
    });
    setIsShowModal(true);
    setIsUpdate(true);
  };

  const delStaffType = (id) => {
    dispatch(
      deleteStaffType(
        id,
        (data) => {
          message.success(data, 2);
          fetchAllStaffTypes();
        },
        (data) => {
          openNutification(data);
        }
      )
    );
  };

  const onAddOrUpdate = (value) => {
    if (isUpdate) {
      dispatch(
        fetchUpdateStaffTypes(
          currentStaffTypeId,
          value,
          (mess) => {
            fetchAllStaffTypes();
            message.success(mess, 2);
            setIsShowModal(false);
          },
          (error) => onError(error)
        )
      );
    } else {
      dispatch(
        fetchAddStaffTypes(
          value,
          (mess) => {
            fetchAllStaffTypes();
            message.success(mess);
            setIsShowModal(false);
          },
          (error) => onError(error)
        )
      );
    }
  };

  const openModalDetail = (name, id) => {
    const newValue = listAllUser.filter(
      (user) => user.staff_type_id === id && user.work_status === 1
    );
    setListUserByStaffType(newValue);
    setNameStaffType(name);
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
              delStaffType,
              openModalDetail,
              decentralizationAdmin(roleByUser),
              page
            )}
            dataSource={configData(search, listStaffTypes)}
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
        title={nameStaffType}
        openPopup={isPopupDetail}
        handleCancel={handleCancel}
        isDepartment={false}
        detail={detailUser}
        data={listUserByStaffType}
        allDepartment={allDepartment}
      />
    </Layout>
  );
};

export default StaffType;
