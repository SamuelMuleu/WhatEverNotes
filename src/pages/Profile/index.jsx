import { Container, Header, Form, Avatar } from "./style";
import { Link } from "react-router-dom";

import { useState } from "react";

import { useAuth } from "../../hooks/auth";


import { api } from "../../services/api";
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

import { Input } from "../../componets/Inputs";
import { Button } from "../../componets/Button";

export function Profile() {
  const { user, updateProfile } = useAuth();
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState();
  const [passwordNew, setPasswordNew] = useState();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);

  async function handleUpdate() {
    const updated = {
      name,
      email,
      password: passwordOld,
      old_password: passwordNew,
    };

    const userUpdated = Object.assign(user,updated);

    await updateProfile({ user:userUpdated, avatarFile });
  }
  function handleChangeAvatar(event) {
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

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
          <img src={avatar} alt="Foto do usuario" />

          <label type="file" htmlFor="avatar">
            <FiCamera />
            <input id="avatar" type="file" onChange={handleChangeAvatar} />
          </label>
        </Avatar>
        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></Input>
        <Input
          placeholder="E-mail"
          type="email"
          icon={FiMail}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></Input>
        <Input
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
          onChange={(e) => setPasswordOld(e.target.value)}
        ></Input>
        <Input
          placeholder="Nova Senha"
          type="password"
          icon={FiLock}
          onChange={(e) => setPasswordNew(e.target.value)}
        ></Input>

        <Button title="Salvar" onClick={handleUpdate} />
      </Form>
    </Container>
  );
}
