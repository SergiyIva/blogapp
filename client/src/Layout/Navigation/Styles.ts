import styled from "styled-components";
import { Link } from "react-router-dom";
import { FlexWithGap } from "../../styles/utilites";

export const Nav = styled.nav`
  padding: 1em;
  background: hsl(205, 20%, 95%);
  padding-top: 5rem;

  @media screen and ${({ theme }) => theme.media.iPad} {
    padding-top: 1em;
    position: fixed;
    width: 220px;
    height: calc(100% - 64px);
  }
`;

export const NavList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  line-height: 2;
  text-align: center;

  a {
    text-decoration: none;
    font-weight: bold;
    font-size: 1.1em;
    color: ${({ theme }) => theme.colors.bgColor};
  }

  a:hover {
    color: ${({ theme }) => theme.colors.brandColor};
  }
`;

export const CustomLink = styled(Link)`
  ${FlexWithGap};
`;
