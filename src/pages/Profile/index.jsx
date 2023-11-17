import { Container, Header, Form, Avatar } from "./style";
import { Link } from "react-router-dom";


import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";

import { Input } from "../../componets/Inputs";
import { Button } from "../../componets/Button";

export function Profile() {
  return (
    <Container>
      <header>
        <Header>
          <Link to="/">
            <FiArrowLeft size={40} />
          </Link>
        </Header>
      </header>
      <Form>
        <Avatar>
        <img src="https://github.com/samuelmuleu.png" alt="Foto do usuario" />

        <label type="file" htmlFor="avatar">
          <FiCamera />
          <input
            id="avatar"
            type="file"
   
          />
        </label>
        </Avatar>
        <Input placeholder="Nome" type="text" icon={FiUser}></Input>
        <Input placeholder="E-mail" type="email" icon={FiMail}></Input>
        <Input placeholder="Senha atual" type="password" icon={FiLock}></Input>
        <Input placeholder="Nova Senha" type="password" icon={FiLock}></Input>
        <Button title="Salvar" />
      </Form>
    </Container>
  );
}
