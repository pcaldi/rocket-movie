import { LuMail, LuLock, LuUser, LuArrowLeft } from "react-icons/lu"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"


import { BackgroundImage, Container, Form } from "./styles";
import { Link } from "react-router-dom";

export function SignUp() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>

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
          placeholder="Senha"
          type="password"
          icon={LuLock}
        />

        <Button title="Cadastrar" />

        <footer>
          <Link to="/">
            <LuArrowLeft />
            Voltar para o login
          </Link>
        </footer>


      </Form>

      <BackgroundImage />

    </Container>
  )
}
