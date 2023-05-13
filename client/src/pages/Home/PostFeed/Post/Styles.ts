import styled from "styled-components";
import { FlexWithGap } from "../../../../styles/utilites";

export const StyledNote = styled.article`
  max-width: 800px;
  margin: 0 auto;
`;

export const MetaData = styled.div`
  margin-bottom: 1rem;
  @media screen and ${({ theme }) => theme.media.bigMobile} {
    display: flex;
    align-items: center;
    svg {
      font-size: 2rem;
      vertical-align: -5px;
    }
  }
`;

export const MetaInfo = styled.div`
  padding-right: 1em;
  svg {
    opacity: 0.5;
  }
`;

export const FlexDivider = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  margin-right: auto;
`;

export const UserActions = styled.div`
  margin-left: auto;
`;

export const Image = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
`;
