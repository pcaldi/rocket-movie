/* eslint-disable react/prop-types */
import { Container } from "./styles";

import { Rating } from "../Rating"
import { Tag } from "../Tag"

export function Movie({ data, ...rest }) {
  return (
    <Container {...rest}>
      <div className="top">
        <h2>{data.title}</h2>
        <Rating grade={data.rating} />

      </div>

      <main>

        <p>
          {data.description}
        </p>


      </main>

      {data.tags &&
        <footer>
          {
            data.tags.map(tag => (
              <Tag key={tag.id} title={tag.name} />
            ))
          }
        </footer>
      }




    </Container>
  )
}
