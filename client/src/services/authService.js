import api from "../configs/api";

export const login = (data) => {
  let url = "/login";
  return api.post(url, data);
};

export const getMe = () => {
  const url = "/me";
  return api.post(url);
};

export const logout = () => {
  const url = "/logout";
  return api.post(url);
};

export const loginWithGoogle = (data) => {
  let url = "/callback/login/google";
  return api.post(url, data);
}
