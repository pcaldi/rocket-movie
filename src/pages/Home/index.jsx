import { useState, useEffect } from "react"

import { Container, Content } from "./styles";

import { LuPlus } from "react-icons/lu"

import { api } from "../../services/api";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Movie } from "../../components/Movie";
import { Input } from "../../components/Input";

import { Link, useNavigate } from "react-router-dom";

export function Home() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  function handlePreview(id) {
    navigate(`/preview/${id}`);
  }


  useEffect(() => {
    async function fetchMovies() {
      const response = await api.get(`/notes?title=${search}`);
      setMovies(response.data);
    }

    fetchMovies();
  }, [search]);

  return (
    <Container>
      <Header>
        <Input
          type="text"
          placeholder="Pesquise pelo título"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </Header>
      <main>
        <header>
          <h1>Meus Filmes</h1>
          <Link to="/new">
            <Button icon={LuPlus} title="Adicionar Filme" />
          </Link>

        </header>

        <Content>
          {
            movies.map((movie) => (
              <Movie
                key={String(movie.id)}
                data={movie}
                onClick={() => handlePreview(movie.id)}
              />
            ))
          }
        </Content>
      </main>

    </Container>
  )
}
