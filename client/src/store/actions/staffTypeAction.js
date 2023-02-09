import * as types from "../actionTypes/staffType";

export const fetchStaffTypes = (onSuccess, onError) => ({
  type: types.FETCH_ALL_STAFF_TYPE,
  onSuccess,
  onError,
});

export const fetchUpdateStaffTypes = (id, params, onSuccess, onError) => ({
  type: types.FETCH_UPDATE_STAFF_TYPE,
  id,
  params,
  onSuccess,
  onError,
});

export const fetchAddStaffTypes = (params, onSuccess, onError) => ({
  type: types.FETCH_ADD_STAFF_TYPE,
  params,
  onSuccess,
  onError,
});

export const deleteStaffType = (id, onSuccess, onError) => ({
  type: types.DELETE_STAFF_TYPE,
  id,
  onSuccess,
  onError,
});
