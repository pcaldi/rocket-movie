import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
> header {
    height: 144px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

    display: flex;
    align-items: center;
    padding-left: 144px;
   }
`;


export const Form = styled.form`
    max-width: 340px;
    margin: -84px auto 0;

    > div:nth-child(3){
      margin-bottom: 24px;
    }

    >button {
      margin-top: 24px;
    }
`;

export const Avatar = styled.div`
  width: 186px;
  height: 186px;

  margin: 0 auto 32px;
  position: relative;

  > img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  > label {
    width: 48px;
    height: 48px;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    background: ${({ theme }) => theme.COLORS.PINK};

    position: absolute;
    bottom: 7px;
    right: 7px;

    cursor: pointer;

    svg {
      font-size: 20px;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    }

    input {
      display: none;
    }
  }

`;
