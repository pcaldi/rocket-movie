import styled from 'styled-components';

export const Container = styled.span`
  font-size: 12px;
  padding: 8px 16px;
  border-radius: 8px;
  margin-right: 6px;
  font-weight: 400;

  color: ${({ theme }) => theme.COLORS.GRAYS_100};
  background: ${({ theme }) => theme.COLORS.BACKGROUND_600};
`;
