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
    max-width: 1137px;

    margin: 0 auto;

    grid-area: content;
    overflow-y: auto;
    padding-right: 6px;


    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.COLORS.PINK};
      border-radius: 8px;
    }

  }

  header {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 0;

    > h1 {
      font-weight: 400;
    }

  }
`;

export const Content = styled.div`
  width: 100%;
`;
