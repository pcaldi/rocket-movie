import styled from 'styled-components';

import backgroundImg from "../../assets/background.png"

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 136px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;

  > h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > h2 {
    font-size: 24px;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.WHITE};

    margin: 48px 0;
  }

  > p {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 14px;
  }

  > button {
    margin-top: 18px;
  }

  > footer {

    margin-top: 42px;

  }

`;

export const BackgroundImage = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;

`;
