import api from "../configs/api";

export const departmentCount = () => {
  const url = "/departments/count";
  return api.get(url);
};

export const userCount = () => {
  const url = "/users/count";
  return api.get(url);
};
