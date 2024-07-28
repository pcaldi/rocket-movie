import { useState } from "react"

import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Input } from "../../components/Input"
import { Textarea } from "../../components/Textarea"
import { MovieItem } from "../../components/MovieItem"
import { Button } from "../../components/Button"
import { Section } from "../../components/Section"

import { Container, Form } from "./styles";

import { api } from "../../services/api"

import { LuArrowLeft } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom"


export function New() {
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");

  const navigate = useNavigate();


  function handleAddTag() {
    setTags(prevState => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted));
  }

  async function handleNewNote() {
    const newMovie = {
      title,
      description,
      rating: String(rating),
      tags,
    }

    if (!title || !description || !rating) {
      alert("Por favor, preencha todos os campos!");
      return;
    }

    if (newTag) {
      return alert("Por favor, adicione o marcador!");
    }

    await api.post("/notes", newMovie);

    alert("Filme adicionado com sucesso!");
    navigate(-1);
  }

  function handleClearMovie() {
    const confirm = window.confirm("Todas as alterações serão perdidas! Tem certeza que deseja excluir as alterações");

    if (confirm) {
      navigate(-1);
    }
  }


  return (
    <Container>
      <Header>
        <Input
          type="text"
          placeholder="Pesquise pelo título"
        />
      </Header>

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
              onChange={(e) => setTitle(e.target.value)}
            />

            <Input
              placeholder="Sua nota(de 0 a 5)"
              type="number"
              min={0}
              max={5}
              onChange={(e) => setRating(e.target.value)}
            />

          </div>

          <div>

            <Textarea
              placeholder="Observações"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>


          <Section title="Marcadores">
            <div className="tags">

              {
                tags.map((tag) => (
                  <MovieItem
                    key={String(tag.id)}
                    value={tag}
                    onClick={() => handleRemoveTag(tag)}
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
            <Button
              title="Excluir Filme"
              onClick={handleClearMovie}
            />

            <Button
              title="Salvar alterações"
              onClick={handleNewNote}
            />
          </div>

        </Form>
      </main>
    </Container>
  )
}
