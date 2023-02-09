/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Layout from "../../layouts/Layout";
import { Table, Form, message, Skeleton } from "antd";
import { columns } from "./columns";
import { WapperHeader, WapperTables } from "./styled";
import Search from "../../components/Search";
import Popup from "./Modal";
import { configData } from "../../helpers/search";
import getFirstError from "../../helpers/getFirstError";
import { LABEL } from "../../constants/deparments";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDataDepartment,
  fetchAddDepartment,
  fetchUpdateDepartment,
  deleteDepartment,
} from "../../store/actions/department";
import {
  fetchListPM,
  fetchLisUser,
  setUserById,
} from "../../store/actions/userAction";
import { fetchAllRoles } from "../../store/actions/roleAction";
import ButtonAdd from "../../components/ButtonAdd";
import { decentralizationAdmin } from "../../helpers/customRole";
import { findPMById, findPMByName } from "../../helpers/department";
import ModalDetailUser from "../../components/ModalDetail";
import { openNutification } from "../../helpers/nutification";

const Department = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const history = useHistory();

  const roleByUser = useSelector((state) => state.auth.profile.role_id);

  const [isModal, setModal] = useState(false);
  const [isUpdate, setUpdate] = useState(false);
  const [isPopupDetail, setPopupDetail] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [listDepartments, setListDepartments] = useState([]);
  const [listPM, setListPM] = useState([]);
  const [listAllUser, setListAllUser] = useState([]);
  const [listUserByDepartment, setListUserByDepartment] = useState([]);
  const [allRole, setAllRole] = useState([]);
  const [search, setSearch] = useState("");
  const [currentIdDepartment, setCurrentIdDepartment] = useState("");
  const [nameDepartment, setNameDepartment] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchAllDepartment();
  }, []);

  useEffect(() => {
    dispatch(
      fetchListPM(
        (data) => onSuccessListPM(data.data),
        (data) => onError(data)
      )
    );
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
      fetchAllRoles(
        (data) => {
          setAllRole(data);
        },
        (data) => {
          onError(data);
        }
      )
    );
  }, []);

  const onSuccess = (data) => {
    setListDepartments([...data]);
    setLoading(false);
  };

  const onError = (data) => {
    message.error(getFirstError(data?.error), 1);
    setLoading(false);
  };

  const fetchAllDepartment = () => {
    setLoading(true);
    dispatch(
      fetchDataDepartment(
        (data) => onSuccess(data),
        (data) => onError(data)
      )
    );
  };

  const onSuccessListPM = (data) => {
    setListPM([...data]);
  };

  const add = () => {
    form.resetFields();
    setUpdate(false);
    setModal(true);
  };

  const edit = (id, data) => {
    setCurrentIdDepartment(id);
    form.setFieldsValue({
      code: data.code,
      name: data.name,
      head_of_department_id: findPMById(listPM, data.head_of_department_id),
      description: data.description,
    });
    setUpdate(true);
    setModal(true);
  };

  const delDepartment = (id) => {
    dispatch(
      deleteDepartment(
        id,
        (data) => {
          message.success(data, 2);
          fetchAllDepartment();
        },
        (data) => {
          openNutification(data);
        }
      )
    );
  };

  const handleSearch = (e) => {
    const val = e.target.value;
    setSearch(val);
  };

  const cancel = () => {
    setModal(false);
    setPopupDetail(false);
  };

  const openModalDetail = (name, id) => {
    const newData = listAllUser.filter(
      (item) => item.department_id === id && item.work_status === 1
    );
    setListUserByDepartment(newData);
    setNameDepartment(name);
    setPopupDetail(true);
  };

  const onErrorAddDepartment = (error) => {
    message.error(getFirstError(error));
  };

  const detailUser = (idUser) => {
    dispatch(setUserById(idUser));
    history.push("/detail-employee");
  };

  const onAddOrUpdate = (value) => {
    // Update department
    const newValue = {
      ...value,
      head_of_department_id: findPMByName(listPM, value.head_of_department_id),
      status: 1,
    };
    if (isUpdate) {
      dispatch(
        fetchUpdateDepartment(
          currentIdDepartment,
          newValue,
          (mess) => {
            message.success(mess);
            fetchAllDepartment();
            setModal(false);
          },
          (error) => onErrorAddDepartment(error)
        )
      );
    } else {
      //Add department
      dispatch(
        fetchAddDepartment(
          newValue,
          (mess) => {
            message.success(mess);
            fetchAllDepartment();
            setModal(false);
          },
          (error) => onErrorAddDepartment(error)
        )
      );
    }
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
              delDepartment,
              openModalDetail,
              decentralizationAdmin(roleByUser),
              page
            )}
            dataSource={configData(search, listDepartments)}
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
        openPopup={isModal}
        handleCancel={cancel}
        isUpdate={isUpdate}
        onFinish={onAddOrUpdate}
        form={form}
        listManager={listPM}
      />
      <ModalDetailUser
        title={nameDepartment}
        openPopup={isPopupDetail}
        handleCancel={cancel}
        isDepartment={true}
        detail={detailUser}
        data={listUserByDepartment}
        allRole={allRole}
      />
    </Layout>
  );
};

export default Department;
