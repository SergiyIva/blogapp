import styled from "styled-components";
import { getTransition } from "../utilites";

const Button = styled.button`
  display: block;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.revert};
  background-color: ${({ theme }) => theme.colors.brandColor};
  cursor: pointer;
  opacity: 1;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.darklyBlue};
  }
  ${getTransition(150, ["color", "background-color", "opacity"])};
`;

export default Button;
