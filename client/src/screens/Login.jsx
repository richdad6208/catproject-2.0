import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Form } from "../styles/Form";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import axios from "axios";
import { inputValue } from "../utils";

const Wrapper = styled.div`
  margin-block: 3rem;
  h2 {
    font-size: 25px;
    text-align: center;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  .em {
    font-size: 18px;
    color: crimson;
    font-weight: bold;
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    const body = { email, password };
    axios
      .post("/api/auth/sign-in", body)
      .then((response) => {
        if (response.data.success) {
          setErrorMessage("");
        } else {
          setErrorMessage(response.data.errorMessage);
        }
      })
      .catch(console.error);
  }
  return (
    <Wrapper>
      <h2>로그인</h2>
      {errorMessage?.length ? <p className="em">{errorMessage}</p> : null}
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="이메일"
          onChange={(e) => {
            inputValue(e, setEmail);
          }}
        />
        <input
          type="text"
          placeholder="비밀번호"
          onChange={(e) => {
            inputValue(e, setPassword);
          }}
        />
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
