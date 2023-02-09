import api from "../configs/api";

const fetchAllLevels = () => {
  let url = "/levels";
  return api.get(url);
};

const fetchUpdateLevel = (id, data) => {
  let url = `/levels/${id}`;
  return api.put(url, data);
};

const fetchAddLevel = (data) => {
  let url = "/levels";
  return api.post(url, data);
};

const deleteLevel = (id) => {
  const url = `/levels/${id}`;
  const response = api.delete(url);
  return response;
};

export { fetchAllLevels, fetchAddLevel, fetchUpdateLevel, deleteLevel };
