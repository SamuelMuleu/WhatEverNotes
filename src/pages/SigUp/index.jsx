import { useState } from "react";

import { Container, Background, Form } from "./styles";
import { Link,useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { Input } from "../../componets/Inputs";
import { Button } from "../../componets/Button";
import { FiUser, FiMail, FiLock } from "react-icons/fi";

export function SigUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const navigate = useNavigate();

  function handleSigUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos!");
    }

    api.post("/users",{name,email,password}).then(()=>{
      alert("Usuário cadastrado com sucesso!");
      navigate("/");
    }).catch(error=>{
      if(error.response){
        alert(error.response.data.message);
      }else{
        alert("Não foi possivel cadastrar");
      }
    })
  }

  return (
    <Container>
      <Background />
      <Form>
        <h1>WhateverNotes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis. </p>
        <h2>Crie sua Conta</h2>

        <Input
          placeholder="Nome"
          icon={FiUser}
          onChange={(e) => setName(e.target.value)}
          type="text"
        ></Input>
        <Input
          placeholder="E-mail"
          icon={FiMail}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        ></Input>
        <Input
          placeholder="Senha"
          icon={FiLock}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        ></Input>

        <Button title="Cadastrar" onClick={handleSigUp} />
        <Link to="/">Voltar Para o Login</Link>
      </Form>
    </Container>
  );
}
