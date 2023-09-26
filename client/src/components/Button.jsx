import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  background: dodgerblue;
  padding: 0.3em 0.4em;
  border: 1px solid transparent;
  color: white;
  font-weight: bold;
`;

function Button({ content }) {
  return <Btn>{content}</Btn>;
}

export default Button;
