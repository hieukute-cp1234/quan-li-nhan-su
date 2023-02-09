import * as types from "../actionTypes/user";

export const fetchListPM = (onSuccess, onError) => ({
  type: types.FETCH_LIST_PM,
  onSuccess,
  onError,
});

export const setListPM = (data) => ({
  type: types.SET_LIST_PM,
  data,
});

export const fetchLisUser = (onSuccess, onError) => ({
  type: types.FETCH_LIST_USERS,
  onSuccess,
  onError,
});

export const setListUser = (data) => ({
  type: types.SET_LIST_USERS,
  data,
});

export const addUser = (data, onSuccess, onError) => ({
  type: types.ADD_USERS,
  data,
  onSuccess,
  onError,
});

export const updateUser = (id, data, onSuccess, onError) => ({
  type: types.UPDATE_USERS,
  id,
  data,
  onSuccess,
  onError,
});

export const setUserById = (data) => ({
  type: types.SET_USER_BY_ID,
  data,
});

export const updateAvatar = (data) => ({
  type: types.UPDATE_AVATAR,
  data,
});

export const fetchUserById = (id, onSuccess, onError) => ({
  type: types.FETCH_USER_BY_ID,
  id,
  onSuccess,
  onError,
});
