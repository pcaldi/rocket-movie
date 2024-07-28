import { useState } from "react";

import { LuArrowLeft, LuCamera, LuLock, LuMail, LuUser } from "react-icons/lu";

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"

import { Container, Avatar, Form } from "./styles";

import { useAuth } from "../../hooks/auth";

import { Link } from "react-router-dom";


export function Profile() {

  const { user, updateProfile } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  async function handleUpdateProfile() {
    const update = {
      name,
      email,
      old_password: oldPassword,
      password: newPassword,
    }
    await updateProfile({ user: update });
  }

  return (
    <Container>
      <header>
        <Link to="/">
          <ButtonText title="Voltar" icon={LuArrowLeft} />
        </Link>
      </header>

      <Form>
        <Avatar>
          <img src="https://github.com/pcaldi.png" alt="Foto do usuário" />

          <label htmlFor="avatar">
            <LuCamera />
            <input id="avatar" type="file" />
          </label>
        </Avatar>

        <Input
          placeholder="Nome"
          type="text"
          icon={LuUser}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          placeholder="E-mail"
          type="text"
          icon={LuMail}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          placeholder="Senha atual"
          type="password"
          icon={LuLock}
          onChange={(e) => setOldPassword(e.target.value)}
        />

        <Input
          placeholder="Nova senha"
          type="password"
          icon={LuLock}
          onChange={(e) => setNewPassword(e.target.value)}

        />

        <Button
          title="Salvar"
          onClick={handleUpdateProfile}
        />
      </Form>


    </Container>
  )
}
