/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Table, Skeleton } from "antd";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Layout from "../../layouts/Layout";
import { columns } from "./columns";
import { WapperHeader, WapperTables } from "./styled";
import Search from "../../components/Search";
import { configData } from "../../helpers/search";
import { fetchLisUser } from "../../store/actions/userAction";
import ButtonAdd from "../../components/ButtonAdd";
import { setUserById } from "../../store/actions/userAction";
import {
  roleByAdminAndManage,
  decentralizationAdmin,
} from "../../helpers/customRole";
import { fetchDataDepartment } from "../../store/actions/department";

const Department = () => {
  const [listEmployee, setEmployee] = useState([]);
  const [listDepartments, setListDepartments] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const history = useHistory();
  const dispatch = useDispatch();

  const roleByUser = useSelector((state) => state.auth.profile.role_id);

  useEffect(() => {
    setLoading(true);
    dispatch(
      fetchLisUser(
        (data) => {
          setLoading(false);
          setEmployee(data);
        },
        (data) => {
          setLoading(false);
        }
      )
    );
    dispatch(
      fetchDataDepartment(
        (data) => setListDepartments(data),
        (data) => setLoading(false)
      )
    );
  }, []);

  const add = () => {
    history.push("/add-employee");
  };

  const detail = (_, data) => {
    dispatch(setUserById(data.id));
    history.push("/detail-employee");
  };

  const handleSearch = (e) => {
    const val = e.target.value;
    setSearch(val);
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
            style={{ overflowY: "auto" }}
            columns={columns(
              detail,
              !roleByAdminAndManage(roleByUser),
              page,
              listDepartments
            )}
            dataSource={configData(search, listEmployee)}
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
    </Layout>
  );
};

export default Department;
