import styled from "styled-components";

export const Wrapper = styled.div`
  border: 1px solid hsl(205, 20%, 95%);
  max-width: 500px;
  padding: 2em 3em;
  margin: 0.25em auto;
`;
export const Heading = styled.h2`
  line-height: 1;
  margin: 0 0 1em;
  text-align: center;
`;
export const Form = styled.form`
  label,
  input {
    display: block;
    line-height: 2em;
  }

  input {
    width: 100%;
    margin-bottom: 1em;
  }
`;

export const Error = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.red};
`;
export const BtnDivider = styled.div`
  display: flex;
  justify-content: right;
  margin-top: 1rem;
`;
