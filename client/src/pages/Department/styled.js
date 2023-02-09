import styled from "styled-components";

const WapperHeader = styled.div`
  display: flex;
  justify-content: space-between;
  .header_search {
    width: 80%;
  }
`;

const Link = styled.p`
  cursor: pointer;
  &:hover {
    color: #42ce9f;
    text-decoration-style: solid;
  }
`;

const WapperTables = styled.div`
  margin-top: 20px;
`;

const WrapperButton = styled.div`
  display: flex;
  justify-content: space-around;
`;

export { WapperHeader, WapperTables, WrapperButton, Link };
