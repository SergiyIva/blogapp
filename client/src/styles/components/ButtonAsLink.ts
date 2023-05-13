import styled from "styled-components";
export const ButtonAsLink = styled.button`
  background: none;
  color: ${({ theme }) => theme.colors.brandColor};
  border: none;
  padding: 0;
  font: inherit;
  text-decoration: underline;
  cursor: pointer;

  &:hover,
  &:active {
    color: ${({ theme }) => theme.colors.darklyBlue};
  }
`;
