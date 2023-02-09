import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, message, Form, Skeleton } from "antd";
import { useHistory } from "react-router-dom";

import Layout from "../../layouts/Layout";
import Search from "../../components/Search";
import Popup from "./Modal";
import { WapperHeader, WapperTables } from "./styled";
import { columns } from "./columns";
import { LABEL } from "../../constants/levels";
import { configData } from "../../helpers/search";
import {
  fetchAllLevels,
  fetchAddLevel,
  fetchUpdateLevel,
  deleteLevel,
} from "../../store/actions/levelAction";
import getFirstError from "../../helpers/getFirstError";
import ButtonAdd from "../../components/ButtonAdd";
import { openNutification } from "../../helpers/nutification";
import { decentralizationAdmin } from "../../helpers/customRole";
import ModalDetailUser from "../../components/ModalDetail";
import { fetchLisUser, setUserById } from "../../store/actions/userAction";
import { fetchDataDepartment } from "../../store/actions/department";

const Level = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [form] = Form.useForm();

  const roleByUser = useSelector((state) => state.auth.profile.role_id);

  const [listLevels, setListLevel] = useState([]);
  const [search, setSearch] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isPopupDetail, setIsPopupDetail] = useState(false);
  const [listAllUser, setListAllUser] = useState([]);
  const [listUserByLevel, setListUserByLevel] = useState([]);
  const [allDepartment, setAllDepartment] = useState([]);
  const [nameLevel, setNameLevel] = useState("");
  const [currentLevelId, setCurrentLevelId] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchLevels();
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

  const onError = (error) => {
    message.error(getFirstError(error));
    setLoading(false);
  };

  const onSuccess = (data) => {
    setListLevel(data);
    setLoading(false);
  };

  const fetchLevels = () => {
    setLoading(true);
    dispatch(
      fetchAllLevels(
        (data) => onSuccess(data),
        (error) => onError(error)
      )
    );
  };

  const handleSearch = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  const handleCancel = () => {
    setIsPopupDetail(false);
    setIsShowModal(false);
  };

  const add = () => {
    form.resetFields();
    setIsShowModal(true);
    setIsUpdate(false);
  };

  const edit = (id, data) => {
    setCurrentLevelId(id);
    form.setFieldsValue({
      name: data.name,
      description: data.description,
      salary_factor: data.salary_factor,
    });
    setIsShowModal(true);
    setIsUpdate(true);
  };

  const delLevel = (id) => {
    dispatch(
      deleteLevel(
        id,
        (data) => {
          message.success(data, 2);
          fetchLevels();
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
        fetchUpdateLevel(
          currentLevelId,
          value,
          (mess) => {
            message.success(mess, 2);
            fetchLevels();
            setIsShowModal(false);
          },
          (error) => {
            onError(error);
          }
        )
      );
    } else {
      dispatch(
        fetchAddLevel(
          value,
          (mess) => {
            message.success(mess);
            fetchLevels();
            setIsShowModal(false);
          },
          (error) => onError(error)
        )
      );
    }
  };

  const openModalDetail = (name, id) => {
    const newValue = listAllUser.filter(
      (user) => user.level_id === id && user.work_status === 1
    );
    setListUserByLevel(newValue);
    setNameLevel(name);
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
              delLevel,
              openModalDetail,
              decentralizationAdmin(roleByUser),
              page
            )}
            dataSource={configData(search, listLevels)}
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
        title={nameLevel}
        openPopup={isPopupDetail}
        handleCancel={handleCancel}
        isDepartment={false}
        detail={detailUser}
        data={listUserByLevel}
        allDepartment={allDepartment}
      />
    </Layout>
  );
};

export default Level;
