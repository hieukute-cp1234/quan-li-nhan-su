import * as Types from "../actionTypes/count";

export const countDepartment = (onSuccess, onError) => ({
  type: Types.DEPARMENTS_COUNT,
  onSuccess,
  onError,
});

export const countUser = (onSuccess, onError) => ({
  type: Types.USERS_COUNT,
  onSuccess,
  onError,
});

export const conutWageUser = (data) => ({
  type: Types.WAGE_USER,
  data,
});
