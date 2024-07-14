import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  color:${({ theme }) => theme.COLORS.GRAY_300};

  border-radius: 10px;
  margin: 0 84px;


  > input {
    width: 100%;
    height: 56px;

    padding: 12px;
    border: none;
    background: transparent;
    color: ${({ theme }) => theme.COLORS.WHITE};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
  }

  > svg {
    margin-left: 16px;
  }

`;
