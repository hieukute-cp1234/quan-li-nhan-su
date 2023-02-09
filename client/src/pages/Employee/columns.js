import ButtonEdit from "../../components/ButtonDetail";
import { employeeCode, departmentCode } from "../../helpers/employee";

const renderAction = (id, data, detail, isDisable) => {
  return (
    <span>
      <ButtonEdit handleEdit={() => detail(id, data)} isDisable={isDisable} />
    </span>
  );
};

export const columns = (detail, isDisable, page, department) => {
  return [
    {
      title: "STT",
      dataIndex: "id",
      width: "10%",
      editable: true,
      align: "center",
      render: (_id, _data, index) => (
        <p>{page ? (parseInt(page) - 1) * 10 + index + 1 : ""}</p>
      ),
    },
    {
      title: "Tên nhân viên",
      dataIndex: "name",
      width: "20%",
      editable: true,
      align: "center",
    },
    {
      title: "Mã nhân viên",
      dataIndex: "email",
      width: "15%",
      editable: true,
      align: "center",
      render: (email) => <p>{employeeCode(email)}</p>,
    },
    {
      title: "Bộ phận",
      dataIndex: "department_id",
      width: "15%",
      editable: true,
      align: "center",
      render: (id) => <p>{departmentCode(id, department)}</p>,
    },
    {
      title: "Trạng thái",
      dataIndex: "work_status",
      width: "20%",
      editable: true,
      align: "center",
      render: (status) => <p>{status === 1 ? "Active" : "In Active"}</p>,
    },
    {
      title: "Chức năng",
      dataIndex: "id",
      key: "id",
      width: "20%",
      align: "center",
      render: (id, data) => renderAction(id, data, detail, isDisable),
    },
  ];
};
