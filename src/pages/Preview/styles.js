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

    width: 100%;
    max-width: 1137px;
    margin: 48px auto;

  }

   header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;

    > div {
      width: 200px;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 19px;
  margin-bottom: 24px;

   > h1 {
    font-size: 38px;
    font-weight: 500;
   }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;


  > p {
    display: flex;
    align-items: center;
    display: flex;
    align-items: center;
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};

    img {
      margin-right: 6px;
      width: 16px;
      height: 16px;
      border-radius: 50%;
    }
  }

  > span {
    display: flex;
    align-items: center;
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};

     svg {
       margin-right: 6px;
       color: ${({ theme }) => theme.COLORS.PINK};
     }
  }

`;

export const Section = styled.div`
  padding: 40px 0;

`;

export const Description = styled.div`

  p{
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    text-align: justify;
  }

`;
