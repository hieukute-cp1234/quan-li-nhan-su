import api from "../configs/api";

const fetchDepartments = (params) => {
  const url = "/departments";
  const response = api.get(url, { params: params });
  return response;
};

const updateDepartments = (id, data) => {
  const url = `/departments/${id}`;
  const response = api.put(url, data);
  return response;
};

const addDepartments = (data) => {
  const url = "/departments";
  const response = api.post(url, data);
  return response;
};

const deleteDepartment = (id) => {
  const url = `/departments/${id}`;
  const response = api.delete(url);
  return response;
};

const showDetailDepartment = (id) => {
  const url = `/departments/${id}`;
  const response = api.get(url);
  return response;
};

export {
  fetchDepartments,
  updateDepartments,
  addDepartments,
  deleteDepartment,
  showDetailDepartment,
};
