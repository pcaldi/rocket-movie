import styled from 'styled-components';

export const Container = styled.div`

  display: flex;
  align-items: center;

  background: ${({ theme, $isnew }) => $isnew ? "transparent" : theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.GRAY_200};

  border: ${({ theme, $isnew }) => $isnew ? `2px dashed ${theme.COLORS.GRAY_300}` : "none"};

  border-radius: 10px;

  > button {
    border: none;
    background: none;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      color: ${({ theme }) => theme.COLORS.PINK};
      font-size: 20px;
      margin-right: 8px;
    }
  }


  > input {
    max-width: 150px;
    height: 56px;

    padding: 16px;
    border: none;
    background: transparent;
    color: ${({ theme }) => theme.COLORS.WHITE};

    ::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
  }

`;
