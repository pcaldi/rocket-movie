import { Container, Brand, Profile, Logout } from "./styles";

import { LuSearch } from "react-icons/lu"

import { Input } from "../Input";

import { useAuth } from '../../hooks/auth';
import { ButtonText } from "../ButtonText";

export function Header() {

  const { signOut, user } = useAuth();

  function handleSignOut() {
    const confirm = window.confirm("Tem certeza que deseja sair?");

    if (confirm) {
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
