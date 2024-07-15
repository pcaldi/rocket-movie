import { LuMail, LuLock, LuArrowLeft } from "react-icons/lu"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"


import { BackgroundImage, Container, Form } from "./styles";

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
          <ButtonText
            title="Voltar para o login"
            icon={LuArrowLeft}
          />
        </footer>


      </Form>

      <BackgroundImage />

    </Container>
  )
}
