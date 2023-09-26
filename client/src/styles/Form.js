import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: min(500px, 50%);
  margin-inline: auto;
  gap: 1rem;

  input {
    padding: 0.3em 0.4em;
    border: 2px solid #ccc;
    &:focus {
      border: 2px solid dodgerblue;
      outline: 0;
    }
    &::placeholder {
      color: #aaa;
      font-size: 18px;
    }
  }
`;
