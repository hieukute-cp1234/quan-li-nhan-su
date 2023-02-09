import * as types from "../actionTypes/department";

export const fetchDataDepartment = (onSuccess, onError) => ({
  type: types.FETCH_DATA_DEPARTMENT,
  onSuccess,
  onError,
});

export const setDataDepartment = (data) => ({
  type: types.SET_DATA_DEPARTMENT,
  data,
});

export const fetchAddDepartment = (params, onSuccess, onError) => ({
  type: types.ADD_DEPARTMENT,
  params,
  onSuccess,
  onError,
});

export const fetchUpdateDepartment = (id, params, onSuccess, onError) => ({
  type: types.UPDATE_DEPARTMENT,
  id,
  params,
  onSuccess,
  onError,
});

export const deleteDepartment = (id, onSuccess, onError) => ({
  type: types.DELETE_DEPARTMENT,
  id,
  onSuccess,
  onError,
});

export const showDetailDepartment = (id, onSuccess, onError) => ({
  type: types.SHOW_DETAIL_DEPARTMENT,
  id,
  onSuccess,
  onError,
});
