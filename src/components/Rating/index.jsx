/* eslint-disable react/prop-types */
import { Container } from "./styles";

import { MdStar, MdStarBorder } from "react-icons/md";

export function Rating({ grade, isBigSize }) {
  let stars = [];

  for (let star = 1; star <= 5; star++) {
    if (star <= grade) {
      stars.push(<MdStar key={star} />);
    } else {
      stars.push(<MdStarBorder key={star} />);
    }
  }

  return (
    <Container isBigSize={isBigSize}>
      {stars}
    </Container>
  )

}
