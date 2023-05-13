import { createGlobalStyle } from "styled-components";
import { getTransition } from "./utilites";

export default createGlobalStyle`
  :root {
    box-sizing: border-box;
    font-size: calc(0.8rem + 0.25vw);
    letter-spacing: 0.01rem;
  }

  *,
  ::after,
  ::before {
    box-sizing: inherit;
  }

  body,
  html {
    height: 100%;
    margin: 0;
  }

  body {
    font-family: sans-serif;
    background-color: ${({ theme }) => theme.colors.revert};
    color: ${({ theme }) => theme.colors.font};
    line-height: 1.4;
  }

  a {
    color: ${({ theme }) => theme.colors.brandColor};
    ${getTransition()};
  }

  a:hover {
    color: ${({ theme }) => theme.colors.darklyBlue};
  }

  code,
  pre {
    max-width: 100%;
  }
`;
