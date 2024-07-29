/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

import { Container, Content, Description, Info, Section } from "./styles";

import { Tag } from "../../components/Tag";
import { Input } from "../../components/Input";
import { Header } from "../../components/Header";
import { Rating } from "../../components/Rating";
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";

import avatarPlaceholder from "../../assets/placeholder_profile.png";

import { LuArrowLeft, LuClock } from "react-icons/lu";

import { useParams, useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { useAuth } from "../../hooks/auth";


export function Preview() {
  const [data, setData] = useState(null);

  const { user } = useAuth();

  const navigate = useNavigate();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  const params = useParams();

  function handleBack() {
    navigate(-1);
  }

  async function handleDeleteMovie() {
    const confirmDeleted = window.confirm("Tem certeza que deseja excluir o filme?");

    if (confirmDeleted) {
      await api.delete(`/notes/${params.id}`);
      navigate(-1);
    }
  }


  useEffect(() => {
    async function fetchMovies() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }
    fetchMovies();

  }, []);

  return (
    <Container>
      <Header>
        <Input
          type="text"
          placeholder="Pesquise pelo título"
        />
      </Header>

      {
        data &&
        <main>
          <header>
            <ButtonText
              icon={LuArrowLeft}
              title="Voltar"
              onClick={handleBack}
            />
            <div>
              <Button
                title="Excluir Filme"
                onClick={handleDeleteMovie}
              />
            </div>
          </header>
          <Content>
            <h1>{data.title}</h1>
            <Rating isBigSize grade={data.rating} />
          </Content>

          <Info>
            <p>
              <img src={avatarUrl} alt={user.name} />
              Por {user.name}
            </p>
            <span>
              <LuClock />
              {data.created_at}
            </span>
          </Info>

          {data.tags &&
            <Section>
              {data.tags.map((tag) => (
                <Tag
                  key={String(tag.id)}
                  title={tag.name}
                />
              ))}
            </Section>
          }

          <Description>
            <p>
              {data.description}
            </p>

          </Description>



        </main>
      }
    </Container>
  )
}
