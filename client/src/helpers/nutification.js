import { notification } from "antd";

export const openNutification = (message) => {
  notification.warning({
    message: "Cảnh báo lỗi!",
    description: message,
    placement: "topRight",
    duration: 2,
  });
};
