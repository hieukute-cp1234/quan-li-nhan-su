import styled from "styled-components";

const Label = styled.p`
  margin-top: 13px;
  font-weight: bold;
`;

export const customLabel = (title) => <Label>{title}</Label>;
