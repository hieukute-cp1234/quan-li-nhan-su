import ButtonEdit from "../../components/ButtonEdit";
import ButtonDelete from "../../components/ButtonDelete";
import { WrapperButton, Link } from "./styled";

const renderAction = (id, data, edit, isDisable, del) => {
  return (
    <WrapperButton>
      <ButtonEdit
        handleEdit={() => edit(id, data)}
        isDisable={isDisable}
        title="Sửa"
      />
      <ButtonDelete handleDelete={() => del(id)} isDisable={isDisable} />
    </WrapperButton>
  );
};

export const columns = (edit, del, redirect, isDisable, page) => {
  return [
    {
      title: "STT",
      dataIndex: "id",
      width: "5%",
      editable: true,
      align: "center",
      render: (_id, _data, index) => (
        <p>{page ? (parseInt(page) - 1) * 10 + index + 1 : ""}</p>
      ),
    },
    {
      title: "Tên Phòng ban",
      dataIndex: "name",
      width: "20%",
      editable: true,
      align: "center",
      render: (name, data) => (
        <Link onClick={() => redirect(name, data.id)}>{name}</Link>
      ),
    },
    {
      title: "Trưởng bộ phận",
      dataIndex: "head_of_department_name",
      width: "20%",
      editable: true,
      align: "center",
    },
    {
      title: "Mô tả",
      dataIndex: "description",
      width: "35%",
      editable: true,
      align: "center",
    },
    {
      title: "Chức năng",
      dataIndex: "id",
      key: "id",
      width: "15%",
      align: "center",
      render: (id, data) => renderAction(id, data, edit, isDisable, del),
    },
  ];
};
