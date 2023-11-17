import { Container, Form, Background } from "./styles";

import { Link } from "react-router-dom";
import { Input } from "../../componets/Inputs";
import { FiMail, FiLock } from "react-icons/fi";
import { Button } from "../../componets/Button";

export function SigIn() {
  return (
    <Container>
      <Form>
        <h1>WhateverNotes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>
        <h2>Faça seu login</h2>

        <Input placeholder="E-mail" type="text" icon={FiMail}></Input>
        <Input placeholder="Senha" type="password" icon={FiLock}></Input>

        <Button title="Entrar"></Button>
        <Link to="/register">Cria conta</Link>
      </Form>
      <Background />
    </Container>
  );
}
