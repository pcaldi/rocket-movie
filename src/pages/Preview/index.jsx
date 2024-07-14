import { Container, Content, Description, Info, Section } from "./styles"

import { ButtonText } from "../../components/ButtonText"
import { Header } from "../../components/Header"

import { LuArrowLeft, LuClock } from "react-icons/lu"
import { Rating } from "../../components/Rating"
import { Tag } from "../../components/Tag"


export function Preview() {
  return (
    <Container>
      <Header />

      <main>
        <header>
          <ButtonText icon={LuArrowLeft} title="Voltar" />

        </header>
        <Content>
          <h1>Gladiador</h1>
          <Rating isBigSize grade={4} />
        </Content>

        <Info>
          <p>
            <img src="https://github.com/pcaldi.png" alt="Foto do usuário" />
            Por Paulo Ricardo
          </p>
          <span>
            <LuClock />
            14/07/24 às 13:00
          </span>
        </Info>

        <Section>
          <Tag title="Ação" />
          <Tag title="Drama" />
          <Tag title="Suspense" />
          <Tag title="Ficção" />
        </Section>

        <Description>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut possimus commodi magnam iure suscipit iste perspiciatis distinctio alias dolorem ipsam excepturi libero, labore earum quia consequuntur modi expedita quibusdam.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic consectetur praesentium, temporibus voluptates autem aperiam deleniti pariatur facere quo sint architecto dolor vero optio dolorem asperiores atque nesciunt cumque totam?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptatem harum neque esse, iusto labore cumque. Corrupti maxime doloribus facere, quibusdam natus explicabo recusandae nisi dignissimos, consequuntur aperiam officia dicta?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius laboriosam corrupti nesciunt iure voluptatibus optio voluptates exercitationem asperiores deserunt possimus placeat assumenda, sunt maxime eveniet error necessitatibus aperiam voluptatem minima?
          </p>

        </Description>



      </main>
    </Container>
  )
}
