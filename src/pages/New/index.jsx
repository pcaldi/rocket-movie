import { useState } from "react"

import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Input } from "../../components/Input"
import { Textarea } from "../../components/Textarea"
import { MovieItem } from "../../components/MovieItem"
import { Button } from "../../components/Button"

import { Container, Form } from "./styles";

import { LuArrowLeft } from "react-icons/lu";
import { Section } from "../../components/Section"
import { Link } from "react-router-dom"


export function New() {
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");


  function handleAddTag() {
    setTags(prevState => [...prevState, newTag]);
    setNewTag("");
  }


  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <Link to="/">
              <ButtonText icon={LuArrowLeft} title="Voltar" />
            </Link>
            <h1>Novo Filme</h1>
          </header>

          <div className="input-wrapper">
            <Input
              placeholder="Título"
              type="text"
            />

            <Input
              placeholder="Sua nota(de 0 a 5)"
              type="number"
              min={0}
              max={5}
            />

          </div>

          <div>

            <Textarea placeholder="Observações" />
          </div>


          <Section title="Marcadores">
            <div className="tags">

              {
                tags.map((tag) => (
                  <MovieItem
                    key={String(tag.id)}
                    value={tag}
                    onClick={() => { }}
                  />
                ))
              }
              <MovieItem
                isnew
                placeholder="Novo marcador"
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                onClick={handleAddTag}
              />

            </div>
          </Section>

          <div className="btn">
            <Button title="Excluir Filme" />
            <Button title="Salvar alterações" />
          </div>

        </Form>
      </main>
    </Container>
  )
}
