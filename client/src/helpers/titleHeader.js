import { HEADER } from "../constants/header";

export const titlePage = (path) => {
  switch (path) {
    case "/":
      return HEADER.HOME;
    case "/deparments":
      return HEADER.DEPARMENTS;
    case "/employees":
      return HEADER.EMPLOYEE;
    default:
      return "Quản lý nhân sự";
  }
};
