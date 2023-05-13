import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
`;

export const Form = styled.form`
  height: 100%;
`;

export const TextArea = styled.textarea`
  min-height: 20vh;
  height: 100%;
  width: 100%;
  margin-bottom: 1rem;

  @media screen and ${({ theme }) => theme.media.iPad} {
    min-height: 40vh;
  }
`;

export const Label = styled.label`
  font-weight: bold;
  display: block;
`;
export const Input = styled.input`
  margin-bottom: 1rem;
`;
