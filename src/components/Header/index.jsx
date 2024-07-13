import { Container, Brand, Search, Profile } from "./styles";


export function Header() {
  return (
    <Container>
      <Brand>
        <h1>RocketMovies</h1>
      </Brand>

      <Search>
        <input type="text" placeholder="Pesquisar filmes..." />
      </Search>

      <Profile>
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
