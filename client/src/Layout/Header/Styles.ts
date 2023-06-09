import styled from "styled-components";
import { Link } from "react-router-dom";
import { FlexWithGap } from "../../styles/utilites";

export const HeaderBar = styled.header`
  width: 100%;
  padding: 0.5em 1em;
  display: flex;
  height: 64px;
  position: fixed;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.revert};
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
  z-index: 1;
`;

export const LogoText = styled(Link)`
  margin: 0;
  padding: 0;
  ${FlexWithGap};
  color: ${({ theme }) => theme.colors.font};
  font-size: 2rem;
  text-decoration: none;
`;
