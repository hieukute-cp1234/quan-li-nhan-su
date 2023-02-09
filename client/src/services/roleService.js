import api from "../configs/api";

const fetchAllRoles = () => {
  let url = "/roles";
  return api.get(url);
};

const fetchAddRole = (data) => {
  let url = "/roles";
  return api.post(url, data);
};

const fetchUpdateRole = (id, data) => {
  let url = `/roles/${id}`;
  return api.put(url, data);
};

const deleteRole = (id) => {
  const url = `/roles/${id}`;
  const response = api.delete(url);
  return response;
};

export { fetchAllRoles, fetchAddRole, fetchUpdateRole, deleteRole };
