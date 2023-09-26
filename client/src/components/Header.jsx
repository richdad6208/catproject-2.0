import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1em;
  h1 {
    font-size: 30px;
    font-weight: bold;
    @media (max-width: 500px) {
      font-size: 25px;
    }
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    a {
      padding: 0.5em;
    }
  }
`;

function Header() {
  return (
    <>
      <Wrapper>
        <h1>
          <Link to="/">CatProject ver 2.0</Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="/posts">냥이자랑</Link>
            </li>
            <li>
              <Link to="/login">로그인</Link>
            </li>
          </ul>
        </nav>
      </Wrapper>
    </>
  );
}

export default Header;
