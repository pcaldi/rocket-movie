import { Container, Brand, Profile, Logout } from "./styles";

import { LuSearch } from "react-icons/lu"

import { Input } from "../Input";
import { ButtonText } from "../ButtonText";

import { useAuth } from '../../hooks/auth';

import { useNavigate } from "react-router-dom";

export function Header() {

  const { signOut, user } = useAuth();

  const navigate = useNavigate();

  function handleSignOut() {
    const confirm = window.confirm("Tem certeza que deseja sair?");

    if (confirm) {
      navigate("/")
      signOut();
    }
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

          <p>{user.name}</p>

        </div>
        <img
          src="https://github.com/pcaldi.png"
          alt="Foto do usuário"
        />
      </Profile>

      <Logout>
        <ButtonText
          title="Sair"
          onClick={handleSignOut}
        />
      </Logout>


    </Container>
  )
}
