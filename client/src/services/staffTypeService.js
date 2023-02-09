import api from "../configs/api";

const fetchStaffTypes = () => {
  const url = "/staff-types";
  return api.get(url);
};

const fetchUpdateStaffTypes = (id, data) => {
  const url = `/staff-types/${id}`;
  return api.put(url, data);
};

const fetchAddStaffTypes = (data) => {
  const url = "/staff-types";
  return api.post(url, data);
};

const deleteStaffTypes = (id) => {
  const url = `/staff-types/${id}`;
  const response = api.delete(url);
  return response;
};

export {
  fetchStaffTypes,
  fetchUpdateStaffTypes,
  fetchAddStaffTypes,
  deleteStaffTypes,
};
