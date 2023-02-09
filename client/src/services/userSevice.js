import api from "../configs/api";

const fetchListPM = () => {
  const url = "/users/get-all-pm";
  const response = api.get(url);
  return response;
};

const fetchListUser = () => {
  const url = "/users/list-users";
  const response = api.get(url);
  return response;
};

const addUser = (data) => {
  const url = "/users/add-new-user";
  const response = api.post(url, data);
  return response;
};

const updateUser = (id, data) => {
  const url = `/users/update-profile/${id}`;
  const response = api.post(url, data);
  return response;
};

const updateAvatar = (data) => {
  const url = "/users/update-avatar";
  const response = api.post(url, data);
  return response;
};

const fetchUserById = (id) => {
  const url = `/users/show/${id}`;
  const response = api.get(url);
  return response;
};

export {
  fetchListPM,
  fetchListUser,
  addUser,
  updateUser,
  updateAvatar,
  fetchUserById,
};
