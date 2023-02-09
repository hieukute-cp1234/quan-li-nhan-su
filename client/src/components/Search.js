import { Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import styled from "styled-components";
import PropTypes from "prop-types";

const WrapperInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: ${(props) => (props.width ? props.width : "70")}%;

  .search_input {
    height: 100%;
    width: 100%;
    border: 1px solid #42ce9f;
    border-radius: 5px 0 0 5px;
    outline: none;
    padding-left: 10px;
  }

  .search_button {
    height: 100%;
    border: 1px solid #42ce9f;
    border-radius: 0 5px 5px 0;
    background-color: #42ce9f;
    color: #fff;
  }
`;

const Search = ({ width, handleSearch }) => {
  return (
    <WrapperInput width={width}>
      <input
        className="search_input"
        onChange={handleSearch}
        placeholder="Tìm kiếm theo tên..."
      />
      <Button className="search_button" icon={<SearchOutlined />} />
    </WrapperInput>
  );
};

Search.propTypes = {
  width: PropTypes.number,
  handleSearch: PropTypes.func,
};

export default Search;
