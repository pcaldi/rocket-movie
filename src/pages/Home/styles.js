import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas:
  "header"
  "content";

  > main {

    grid-area: content;
    overflow-y: auto;

    padding-right: 6px;

    width: 100%;
    max-width: 1121px;
    margin: 48px auto;

  }

  header {

    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 50px;

    > h1 {
      font-weight: 400;
    }

  }
`;

export const Content = styled.div`
  margin-top: 40px;

  :hover {
    filter: brightness(0.9);
  }

`;
