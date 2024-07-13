import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  height: 56px;

  background: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  border: none;
  border-radius: 10px;
  padding: 0 16px;
  font-weight: 500;

`;
