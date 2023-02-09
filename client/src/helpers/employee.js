import {
  MARITAL,
  STATUS,
  LEVEL,
  SPECIALIZE,
  STAFF_TYPE,
} from "../constants/employee";

export const maritalStatus = (id) =>
  id === 1 ? MARITAL.SINGLE : id === 2 ? MARITAL.MARRIED : MARITAL.IS_DIFFERENT;

export const status = (id) => (id === 1 ? STATUS.ACTIVE : STATUS.IN_ACTIVE);

export const level = (id) => (id === 1 ? LEVEL.FRESHER : LEVEL.JUNIOR);

export const specialize = (id) => (id === 1 ? SPECIALIZE.FE : SPECIALIZE.BE);

export const staffType = (id) =>
  id === 1 ? STAFF_TYPE.PROBATIONERS : STAFF_TYPE.OFFICIAL;

export const employeeCode = (email) => {
  const code = email?.split("@");
  return code ? code[0] : "HBLaber";
};

export const departmentCode = (id, department) => {
  const findData = department.find((item) => item.id === id);
  return findData?.name || "Chưa có bộ phận";
};

export const roleUser = (role) => {
  switch (role) {
    case 1:
      return "Admin";
    case 2:
      return "PM";
    case 3:
      return "Comtor";
    case 4:
      return "Developer";
    case 5:
      return "QC";
    default:
      return "Chưa có quyền";
  }
};

export const customGener = (id) => {
  switch (id) {
    case 1:
      return "Nam";
    case 2:
      return "Nữ";
    default:
      return "Giới tính khác";
  }
};
