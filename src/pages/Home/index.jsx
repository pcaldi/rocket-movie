import { Container, Content } from "./styles";

import { LuPlus } from "react-icons/lu"

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Movie } from "../../components/Movie";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <Container>
      <Header />
      <main>
        <header>
          <h1>Meus Filmes</h1>
          <Link to="/new">
            <Button icon={LuPlus} title="Adicionar Filme" />
          </Link>

        </header>

        <Content>

          <Movie data={{
            title: 'O Senhor dos Anéis: As Duas Torres',
            rating: '4',
            autor: 'Paulo Ricardo',
            description: 'Após a captura de Merry e Pippy pelos orcs, a Sociedade do Anel é dissolvida. Frodo e Sam seguem sua jornada rumo à Montanha da Perdição para destruir o anel e descobrem que estão sendo perseguidos pelo misterioso Gollum. Enquanto isso, Aragorn, o elfo e arqueiro Legolas e o anão Gimli partem para resgatar os hobbits sequestrados e chegam ao reino de Rohan, onde o rei Theoden foi vítima de uma maldição mortal de Saruman.',
            tags: [
              { id: '1', name: 'Fantasia' },
              { id: '2', name: 'Aventura' }
            ],
          }} />

          <Movie data={{
            title: 'Pulp Fiction',
            rating: '5',
            autor: 'Paulo Ricardo',
            description: 'Assassino que trabalha para a máfia se apaixona pela esposa de seu chefe quando é convidado a acompanhá-la, um boxeador descumpre sua promessa de perder uma luta e um casal tenta um assalto que rapidamente sai do controle.',
            tags: [
              { id: '1', name: 'Crime' },
              { id: '2', name: 'Suspense' },
              { id: '3', name: 'Thriller' }
            ],
          }} />

        </Content>
      </main>

    </Container>
  )
}
