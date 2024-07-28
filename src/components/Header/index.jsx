import { Container, Brand, Profile } from "./styles";

import { LuSearch } from "react-icons/lu"

import { Input } from "../Input";

import { useAuth } from '../../hook/auth';
import { ButtonText } from "../ButtonText";

import { useNavigate } from "react-router-dom";


export function Header() {

  const { signOut } = useAuth();
  const navigate = useNavigate();

  function handleSignOut() {
    navigate("/");
    signOut();
  }

  return (
    <Container>
      <Brand>
        <h1>RocketMovies</h1>
      </Brand>

      <Input
        icon={LuSearch}
        placeholder="Pesquise pelo título"
      />

      <Profile to="/profile">
        <div className="profile">

          <p>Paulo Ricardo</p>
          <ButtonText
            title="Sair"
            onClick={handleSignOut}
          />
        </div>
        <img
          src="https://github.com/pcaldi.png"
          alt="Foto do usuário"
        />
      </Profile>


    </Container>
  )
}
