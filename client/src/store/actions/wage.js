import * as Types from "../actionTypes/wage";

export const fetchListWage = (onSuccess, onError) => ({
  type: Types.FETCH_LIST_WAGE,
  onSuccess,
  onError,
});

export const fetchListWageById = (onSuccess, onError) => ({
  type: Types.FETCH_LIST_WAGE_BY_ID,
  onSuccess,
  onError,
});

export const addWage = (data, onSuccess, onError) => ({
  type: Types.CREATE_WAGE,
  data,
  onSuccess,
  onError,
});

export const sendMailSalary = (id, onSuccess, onError) => ({
  type: Types.SEND_MAIL_SALARY,
  id,
  onSuccess,
  onError,
});

export const updateSalary = (id, data, onSuccess, onError) => ({
  type: Types.UPDATE_WAGE,
  id,
  data,
  onSuccess,
  onError,
});

export const delSalary = (id, onSuccess, onError) => ({
  type: Types.DELETE_WAGE,
  id,
  onSuccess,
  onError,
});

export const sendMailAll = (data, onSuccess, onError) => ({
  type: Types.SEND_MAIL_ALL,
  data,
  onSuccess,
  onError,
});
