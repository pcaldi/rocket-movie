import styled from 'styled-components';

export const Container = styled.div`
  > h2 {
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    font-size: 20px;
    font-weight: 400;

    margin: 24px 0;
  }
`;
