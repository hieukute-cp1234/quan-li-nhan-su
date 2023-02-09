import * as Types from "../actionTypes/auth";

export const login = (data, onSuccess, onError) => ({
  type: Types.LOGIN,
  data,
  onSuccess,
  onError,
});

export const logout = (onSuccess, onError) => ({
  type: Types.LOGOUT,
  onSuccess,
  onError,
});

export const getMe = (onError) => ({
  type: Types.GET_ME,
  onError,
});

export const setProfile = (data) => ({
  type: Types.SET_PROFILE,
  data,
});

export const loginWithGoogle = (data, onSuccess, onError) => ({
  type: Types.LOGIN_WITH_GOOGLE,
  data,
  onSuccess,
  onError,
});
