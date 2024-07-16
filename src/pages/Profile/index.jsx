import { LuArrowLeft, LuCamera, LuLock, LuMail, LuUser } from "react-icons/lu";

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"

import { Container, Avatar, Form } from "./styles";
import { Link } from "react-router-dom";


export function Profile() {
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
        />

        <Input
          placeholder="E-mail"
          type="text"
          icon={LuMail}
        />

        <Input
          placeholder="Senha atual"
          type="password"
          icon={LuLock}
        />

        <Input
          placeholder="Nova senha"
          type="password"
          icon={LuLock}
        />

        <Button title="Salvar" />
      </Form>


    </Container>
  )
}
