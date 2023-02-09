import styled from "styled-components";
import { Image } from "antd";
import { useHistory } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";

const Wapper = styled.div`
  height: 100%;
  width: 13%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  .icon_menu {
    color: #fff;
    font-size: 18px;
  }
`;

const ImageComponent = styled(Image)`
  display: flex !important;
  align-items: center;
  cursor: pointer;
`;

const Logo = ({ openMenu, logo }) => {
  const history = useHistory();
  return (
    <Wapper>
      <MenuOutlined className="icon_menu" onClick={openMenu} />
      <ImageComponent
        preview={false}
        height="90%"
        src={logo}
        onClick={() => history.push("/")}
      />
    </Wapper>
  );
};

export default Logo;
