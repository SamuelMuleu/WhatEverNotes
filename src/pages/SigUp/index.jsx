import { Container, Background, Form } from "./styles";
import { Link } from "react-router-dom";
import { Input } from "../../componets/Inputs";
import { Button } from "../../componets/Button";
import { FiUser, FiMail, FiLock } from "react-icons/fi";

export function SigUp() {
  return (
    <Container>
      <Background />
      <Form>
        <h1>WhateverNotes</h1>
        <p>
          Aplicação para salvar e gerenciar seus links úteis.
          <h2>Crie sua Conta</h2>
        </p>
        <Input placeholder="Nome" icon={FiUser} type="text"></Input>
        <Input placeholder="E-mail" icon={FiMail} type="email"></Input>
        <Input placeholder="Senha" icon={FiLock} type="password"></Input>

        <Button title="Cadastrar" />
        <Link to="/">Voltar Para o Login</Link>
      </Form>
    </Container>
  );
}
