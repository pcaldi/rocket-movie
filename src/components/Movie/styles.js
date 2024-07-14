import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 220px;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_600};

  border-radius: 10px;

  padding: 24px;
  margin: 24px 0;


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

      margin-top: 12px;
      text-align: justify;
      line-height: 18px;

      color:  ${({ theme }) => theme.COLORS.GRAY_300};

      overflow: hidden;
      text-overflow: ellipsis;

      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
  }


  > footer {
    margin-top: 24px;
  }
`;
