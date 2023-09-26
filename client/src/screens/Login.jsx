import React from "react";
import styled from "styled-components";
import { Form } from "../styles/Form";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  margin-block: 3rem;
  h2 {
    font-size: 25px;
    text-align: center;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  p {
    text-align: center;
    margin-top: 1rem;
    a {
      color: dodgerblue;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

function Login() {
  return (
    <Wrapper>
      <h2>로그인</h2>
      <Form>
        <input type="text" placeholder="아이디" />
        <input type="text" placeholder="비밀번호" />
        <Button content="로그인" />
      </Form>
      <p>
        아이디가 없으신가요? &rarr;
        <Link to="/register"> 회원가입 하러가기</Link>
      </p>
    </Wrapper>
  );
}

export default Login;
