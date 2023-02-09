import api from "../configs/api";

export const fetchWage = () => {
  const url = "/salaries";
  return api.get(url);
};

export const fetchWageById = (id) => {
  const url = `/salaries/${id}`;
  return api.get(url);
};

export const createWage = (data) => {
  const url = "/salaries";
  return api.post(url, data);
};

export const sendMailSalary = (id) => {
  const url = `/salaries/send-mail/${id}`;
  return api.post(url);
};

export const updateWage = (id, data) => {
  const url = `/salaries/${id}`;
  return api.put(url, data);
};

export const delWage = (id) => {
  const url = `/salaries/${id}`;
  return api.delete(url);
};

export const sendMailAll = (data) => {
  const url = "/salaries/send-mail-all";
  return api.post(url, data);
};
