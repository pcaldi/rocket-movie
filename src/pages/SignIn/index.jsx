import { useState } from "react";

import { LuMail, LuLock } from "react-icons/lu"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { BackgroundImage, Container, Form } from "./styles";
import { Link } from "react-router-dom";

import { useAuth } from "../../hook/auth";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password });
  }

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
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          placeholder="Senha"
          type="password"
          icon={LuLock}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          title="Entrar"
          onClick={handleSignIn}
        />

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
