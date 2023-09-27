import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Form } from "../styles/Form";
import Button from "../components/Button";
import axios from "axios";

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
    color: red;

    a {
      color: dodgerblue;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [userName, setUserName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  function inputValue(e, method) {
    method(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (email.length < 1) setErrorMessage("아이디가 너무 짧아요");
    if (password.length < 1) setErrorMessage("비밀번호가 너무 짧아요");
    if (password !== passwordConfirm)
      setErrorMessage("비밀번호가 일치하지 않아요");
    if (userName.length < 1) setErrorMessage("닉네임이 너무 짧아요");
    const body = { email, password, userName };
    axios
      .post("/api/auth/sign-up", body)
      .then((response) => {
        if (response.data.success) {
          setErrorMessage("");
          navigate("/login");
        } else {
          setErrorMessage(response.data.errorMessage);
        }
      })
      .catch(console.error);
  }

  return (
    <Wrapper>
      <h2>회원가입</h2>
      {errorMessage ? <p>{errorMessage}</p> : null}
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="이메일"
          onChange={(e) => {
            inputValue(e, setEmail);
          }}
        />
        <input
          type="password"
          placeholder="비밀번호"
          onChange={(e) => {
            inputValue(e, setPassword);
          }}
        />
        <input
          type="password"
          placeholder="비밀번호 확인"
          onChange={(e) => {
            inputValue(e, setPasswordConfirm);
          }}
        />
        <input
          type="text"
          placeholder="닉네임"
          onChange={(e) => {
            inputValue(e, setUserName);
          }}
        />
        <Button content="회원가입" />
      </Form>
    </Wrapper>
  );
}

export default Register;
