import styled from "styled-components";

export const Wrapper = styled.div`
  @media screen and ${({ theme }) => theme.media.iPad} {
    display: flex;
    top: 64px;
    position: relative;
    height: calc(100% - 64px);
    width: 100%;
    flex: auto;
    flex-direction: column;
  }
`;

export const Main = styled.main`
  position: fixed;
  height: calc(100% - 180px);
  width: 100%;
  padding: 1em;
  overflow-y: auto;

  @media screen and ${({ theme }) => theme.media.iPad} {
    flex: 1;
    margin-left: 220px;
    height: calc(100% - 64px);
    width: calc(100% - 220px);
  }
`;
