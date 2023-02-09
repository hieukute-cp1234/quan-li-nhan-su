import * as types from "../actionTypes/specialize";

export const fetchAllSpecializes = (onSuccess, onError) => ({
  type: types.FETCH_ALL_SPECIALIZE,
  onSuccess,
  onError,
});

export const fetchAddSpecialize = (params, onSuccess, onError) => ({
  type: types.FETCH_ADD_SPECIALIZE,
  params,
  onSuccess,
  onError,
});

export const fetchUpdateSpecialize = (id, params, onSuccess, onError) => ({
  type: types.FETCH_UPDATE_SPECIALIZE,
  id,
  params,
  onSuccess,
  onError,
});

export const deleteSpecialize = (id, onSuccess, onError) => ({
  type: types.DELETE_SPECIALIZE,
  id,
  onSuccess,
  onError,
});
