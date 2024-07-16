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
    }

`;


export const Form = styled.div`

  max-width: 1137px;
  margin: 46px auto;


    > header {

      h1 {
        margin: 24px 0;
      }
    }

    .input-wrapper {
      display: flex;
      align-items: center;
      gap: 40px;
    }

    .tags {
      display: flex;
      flex-wrap: wrap;
      gap: 24px;

      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

      padding: 16px ;
      border-radius: 10px;
    }

    .btn {
      display: flex;
      gap: 40px;

      margin-top: 24px;

      button:nth-child(1) {
        background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        color: ${({ theme }) => theme.COLORS.PINK};
      }
    }


`;

