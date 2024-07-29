import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_600};

  border-radius: 16px;

  margin-bottom: 24px;

  display: flex;
  padding: 32px;
  flex-direction: column;
  gap: 15px;

  cursor: pointer;

  .top {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    > h2 {
      font-size: 24px;
      font-weight: 700;
      margin-bottom: 8px;
    }
  }

  > main {

    > p {
      max-height: 53px;

      text-align: justify;
      line-height: 18px;

      color:  ${({ theme }) => theme.COLORS.GRAY_300};

      overflow: hidden;
      text-overflow: ellipsis;

      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;

      white-space: normal;
    }
  }


  > footer {
    margin-top: 20px;
  }
`;
