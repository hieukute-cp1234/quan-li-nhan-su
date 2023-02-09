import {
  HomeOutlined,
  UserOutlined,
  FundProjectionScreenOutlined,
  ApartmentOutlined,
  TeamOutlined,
  CrownOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";

export const MENU = [
  {
    path: "/",
    key: "HOME",
    title: "Tổng quan",
    icon: <HomeOutlined />,
    children: [],
  },
  {
    path: "/deparments",
    key: "DEPARMENTS",
    title: "Phòng ban",
    icon: <ApartmentOutlined />,
    children: [],
  },
  {
    path: "/staff-types",
    key: "STAFF_TYPES",
    title: "Loại nhân viên",
    icon: <UserSwitchOutlined />,
    children: [],
  },
  {
    path: "/levels",
    key: "LEVELS",
    title: "Trình độ",
    icon: <UserOutlined />,
    children: [],
  },
  {
    path: "/specializes",
    key: "SPECIALIZES",
    title: "Chuyên môn",
    icon: <FundProjectionScreenOutlined />,
    children: [],
  },
  {
    path: "/roles",
    key: "ROLES",
    title: "Quyền nhân viên",
    icon: <CrownOutlined />,
    children: [],
  },
  {
    path: "/employees",
    key: "EMPLOYEES",
    title: "Nhân sự",
    icon: <TeamOutlined />,
    children: [],
  },
];
