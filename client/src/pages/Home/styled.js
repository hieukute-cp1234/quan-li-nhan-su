import styled from "styled-components";

export const WrapperHome = styled.div`
  width: 100%;
  height: 235px;
  padding: 30px 40px;
  border-radius: 5px;
  position: relative;

  .number {
    font-size: 35px;
    font-weight: 700;
    color: #fff;
  }

  .text {
    color: #fff;
    font-size: 20px;
    font-weight: 500;
  }
`;

export const WrapperDetail = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  border-radius: 0 0 5px 5px;
  font-size: 15px;
  color: #fff;
  cursor: pointer;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
