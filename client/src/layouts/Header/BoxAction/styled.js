import styled from "styled-components";

export const WrapperAvatar = styled.div`
  width: 15%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .muti_language {
    height: 100%;
    width: 32%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    cursor: pointer;
    padding: 0 5px;

    &:hover {
      background-color: #41b58c;
      border-radius: 5px;
      cursor: pointer;
    }

    .title {
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      -o-user-select: none;
      user-select: none;
    }

    .muti_language_item {
      padding: 10px;
    }
  }

  .box_avt {
    width: 150px;
    padding: 0 5px;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:hover {
      background-color: #41b58c;
      border-radius: 5px;
      cursor: pointer;
    }

    .text_name {
      color: #fff;
      font-weight: 500;
      width: 60%;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      -o-user-select: none;
      user-select: none;
    }

    .icon {
      color: #fff;
      font-size: 15px;
    }
  }
`;
