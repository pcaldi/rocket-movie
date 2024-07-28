import { useState } from "react";

import { LuMail, LuLock, LuUser, LuArrowLeft } from "react-icons/lu"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { api } from "../../services/api"

import { BackgroundImage, Container, Form } from "./styles";
import { Link, useNavigate } from "react-router-dom";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  function handleSignUp() {
    // Verifico se foi preenchido todos os campos
    if (!name || !email || !password) {
      alert("Preencha todos os campos.");
      return;
    }

    // Cadastro o usuário na api
    api.post("/users", { name, email, password })
      .then(() => {
        alert("Cadastro realizado com sucesso!");
        navigate("/");
      })
      .catch(error => {
        if (error.response) {
          alert(error.response.data.error);
        } else {
          alert("Ocorreu um erro ao cadastrar o usuário.");
        }
      });
  }

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
          onChange={(e) => setName(e.target.value)}
        />

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
          title="Cadastrar"
          onClick={handleSignUp}
        />

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
