import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 116px;
  position: relative;

  grid-area: header;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  align-items:center ;
  justify-content: space-between;
  padding: 30px 0;
  gap: 64px;

`;

export const Brand = styled.div`

  h1 {
    color: ${({ theme }) => theme.COLORS.PINK}
  }

`;

export const Search = styled.div`

`;

export const Profile = styled(Link)`
  display: flex;
  align-items: center;


  .profile{
    display: flex;
    flex-direction: column;
    align-items: end;
    margin-right: 12px;
  }

 img {
   width: 64px;
   height: 64px;
   border-radius: 50%;
   object-fit: cover;

 }

 p {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 14px;
    font-weight: 700;
    white-space: nowrap; /* Impede que o texto quebre em várias linhas */
    margin-bottom: 4px; /* Adicione uma margem inferior para separar o texto do link */
 }


`;

export const Logout = styled.div`
  display: flex;
  position: absolute;
  top: 70px;
  right: 77px;
`;
