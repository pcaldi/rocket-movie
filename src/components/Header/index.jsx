import { Container, Brand, Profile } from "./styles";

import { LuSearch } from "react-icons/lu"

import { Input } from "../Input";


export function Header() {
  return (
    <Container>
      <Brand>
        <h1>RocketMovies</h1>
      </Brand>

      <Input icon={LuSearch} placeholder="Pesquise pelo título" />


      <Profile to="/profile">
        <div className="profile">

          <p>Paulo Ricardo</p>
          <a href="#">Sair</a>
        </div>
        <img
          src="https://github.com/pcaldi.png"
          alt="Foto do usuário"
        />
      </Profile>


    </Container>
  )
}
