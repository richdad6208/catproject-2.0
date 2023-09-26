import React from "react";
import { Outlet } from "react-router-dom";
import { GlobalStyles } from "./styles/GlobalStyles.styles";
import styled from "styled-components";

const Container = styled.div`
  width: min(1200px, 100% - 2rem);
  margin-inline: auto;
`;

function Root() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}

export default Root;
