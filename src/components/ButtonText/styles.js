import styled from 'styled-components';

export const Container = styled.button`

  display: flex;
  align-items: center;

  border: none;
  background: none;

  color: ${({ theme }) => theme.COLORS.PINK};
  font-size: 16px;

   > svg {
     margin-right: 6px;
   }
`;
