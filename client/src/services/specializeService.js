import api from "../configs/api";

const fetchAllSpecializes = () => {
  let url = "/specializes";
  return api.get(url);
};

const fetchAddSpecialize = (data) => {
  let url = "/specializes";
  return api.post(url, data);
};

const fetchUpdateSpecialize = (id, data) => {
  let url = `/specializes/${id}`;
  return api.put(url, data);
};

const deleteSpecialize = (id) => {
  const url = `/specializes/${id}`;
  const response = api.delete(url);
  return response;
};

export {
  fetchAllSpecializes,
  fetchAddSpecialize,
  fetchUpdateSpecialize,
  deleteSpecialize,
};
