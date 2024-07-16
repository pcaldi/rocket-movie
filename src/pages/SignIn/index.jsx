import { LuMail, LuLock } from "react-icons/lu"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"



import { BackgroundImage, Container, Form } from "./styles";
import { Link } from "react-router-dom";

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>

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

        <Button title="Entrar" />

        <footer>
          <Link to="/register">
            Criar conta
          </Link>
        </footer>


      </Form>

      <BackgroundImage />

    </Container>
  )
}
