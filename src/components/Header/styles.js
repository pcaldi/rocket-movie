import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 116px;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  align-items:center ;
  justify-content: space-between;

  padding: 30px 0;

`;

export const Brand = styled.div`

  h1 {
    color: ${({ theme }) => theme.COLORS.PINK}
  }

`;

export const Search = styled.div`


`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  .profile{

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 9px;
  }

 img {
   width: 64px;
   height: 64px;
   border-radius: 50%;
   object-fit: cover;

 }

 p {
  font-size: 14px;
  font-weight: 700;
 }

 a {
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.GRAY_300}
 }

`;
