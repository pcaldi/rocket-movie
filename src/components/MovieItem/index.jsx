/* eslint-disable react/prop-types */
import { Container } from "./styles";

import { LuPlus, LuX } from "react-icons/lu"

export function MovieItem({ isnew, value, onClick, ...rest }) {
  return (
    <Container $isnew={isnew}>
      <input
        type="text"
        value={value}
        readOnly={!isnew}
        {...rest}
      />

      <button
        type="button"
        onClick={onClick}
      >
        {isnew ? <LuPlus /> : <LuX />}
      </button>
    </Container>
  )
}
