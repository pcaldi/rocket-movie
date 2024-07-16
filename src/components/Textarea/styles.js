import styled from 'styled-components';

export const Container = styled.textarea`
  width: 100%;
  height: 273px;

  display: flex;
  align-items: center;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  color:${({ theme }) => theme.COLORS.WHITE};

  border-radius: 10px;
  border: none;
  padding: 12px;

  margin-top: 24px;

  resize: none;


`;
