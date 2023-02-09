import ButtonEdit from "../../components/ButtonEdit";
import ButtonDelete from "../../components/ButtonDelete";
import { WrapperButton, Link } from "../Department/styled";

const renderAction = (id, data, edit, isDisable, del) => {
  return (
    <WrapperButton>
      <ButtonEdit handleEdit={() => edit(id, data)} isDisable={isDisable} />
      <ButtonDelete handleDelete={() => del(id)} isDisable={isDisable} />
    </WrapperButton>
  );
};

export const columns = (edit, del, detail, isDisable, page) => {
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
      title: "Tên chuyên môn",
      dataIndex: "name",
      width: "20%",
      editable: true,
      align: "center",
      render: (name, data) => (
        <Link onClick={() => detail(name, data.id)}>{name}</Link>
      ),
    },
    {
      title: "Mô tả",
      dataIndex: "description",
      width: "60%",
      editable: true,
      align: "center",
    },
    {
      title: "Chức năng",
      dataIndex: "id",
      key: "id",
      width: "20%",
      align: "center",
      render: (id, data) => renderAction(id, data, edit, isDisable, del),
    },
  ];
};
