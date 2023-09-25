import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Wrapper = styled.div``;

function Header() {
  return (
    <>
      <Wrapper>
        <h1>
          <Link to="/">CatProject ver 2.0</Link>
        </h1>
        <nav></nav>
      </Wrapper>
    </>
  );
}

export default Header;
