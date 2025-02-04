import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  height: 56px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 8px;

  font-weight: 500;

  background: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  border: none;
  border-radius: 10px;
  padding: 0 16px;

  svg {
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  }

`;
