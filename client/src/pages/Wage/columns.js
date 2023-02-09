import { WrapperButton } from "../Department/styled";
import { ButtonComponent } from "./styled";
import { MailOutlined, EditFilled } from "@ant-design/icons";
import ButtonDelete from "../../components/ButtonDelete";

const renderAction = (id, data, sendMail, edit, del) => {
  return (
    <WrapperButton>
      <ButtonComponent
        onClick={() => edit(id, data)}
        icon={<EditFilled />}
        title="Sửa"
      />
      <ButtonComponent
        onClick={() => sendMail(id)}
        icon={<MailOutlined />}
        title="Gửi mail"
      />
      <ButtonDelete handleDelete={() => del(id)} isDisable={false} />
    </WrapperButton>
  );
};

export const columns = (edit, sendMail, page, del) => {
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
      title: "Tên",
      dataIndex: "user",
      width: "15%",
      editable: true,
      align: "center",
      render: (user) => <p>{user.name}</p>,
    },
    {
      title: "Lương cơ bản",
      dataIndex: "salary_basic",
      width: "15%",
      editable: true,
      align: "center",
    },
    {
      title: "Lương bảo hiểm",
      dataIndex: "insurance_premium_salary",
      width: "15%",
      editable: true,
      align: "center",
    },
    {
      title: "Thưởng",
      dataIndex: "bonus_money",
      width: "10%",
      editable: true,
      align: "center",
    },
    {
      title: "Tháng",
      dataIndex: "month_pay",
      width: "10%",
      editable: true,
      align: "center",
    },
    {
      title: "Chức năng",
      dataIndex: "id",
      key: "id",
      width: "12%",
      align: "center",
      render: (id, data) => renderAction(id, data, sendMail, edit, del),
    },
  ];
};
