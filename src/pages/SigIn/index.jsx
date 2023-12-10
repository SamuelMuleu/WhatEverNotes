import { Container, Form, Background } from "./styles";

import { useState } from "react";

import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

import { Input } from "../../componets/Inputs";
import { FiMail, FiLock } from "react-icons/fi";
import { Button } from "../../componets/Button";

export function SigIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const { signIn } = useAuth();
  function handleSignIn() {

    signIn({ email, password });
  }

  return (
    <Container>
      <Form>
        <h1>WhateverNotes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>
        <h2>Faça seu login</h2>

        <Input
          placeholder="E-mail"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          icon={FiMail}
        ></Input>
        <Input
          placeholder="Senha"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          icon={FiLock}
        ></Input>

        <Button title="Entrar" onClick = {handleSignIn}></Button>
        <Link to="/register">Cria conta</Link>
      </Form>
      <Background />
    </Container>
  );
}
