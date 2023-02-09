import * as types from "../actionTypes/role";

export const fetchAllRoles = (onSuccess, onError) => ({
  type: types.FETCH_ALL_ROLE,
  onSuccess,
  onError,
});

export const fetchAddRole = (params, onSuccess, onError) => ({
  type: types.FETCH_ADD_ROLE,
  params,
  onSuccess,
  onError,
});

export const fetchUpdateRole = (id, params, onSuccess, onError) => ({
  type: types.FETCH_UPDATE_ROLE,
  id,
  params,
  onSuccess,
  onError,
});

export const deleteRole = (id, onSuccess, onError) => ({
  type: types.DEELETE_ROLE,
  id,
  onSuccess,
  onError,
});
