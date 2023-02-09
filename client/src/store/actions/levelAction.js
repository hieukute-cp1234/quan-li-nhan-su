import * as types from "../actionTypes/level";

export const fetchAllLevels = (onSuccess, onError) => ({
  type: types.FETCH_ALL_LEVEL,
  onSuccess,
  onError,
});

export const fetchAddLevel = (params, onSuccess, onError) => ({
  type: types.FETCH_ADD_LEVEL,
  params,
  onSuccess,
  onError,
});

export const fetchUpdateLevel = (id, params, onSuccess, onError) => ({
  type: types.FETCH_UPDATE_LEVEL,
  id,
  params,
  onSuccess,
  onError,
});

export const deleteLevel = (id, onSuccess, onError) => ({
  type: types.DELETE_LEVEL,
  id,
  onSuccess,
  onError,
});
