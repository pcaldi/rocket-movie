/* eslint-disable react/prop-types */
import { Container, Brand, Profile, Logout } from "./styles";

import { api } from "../../services/api";

import avatarPlaceholder from "../../assets/placeholder_profile.png";

import { ButtonText } from "../ButtonText";

import { useAuth } from '../../hooks/auth';

import { useNavigate } from "react-router-dom";

export function Header({ children }) {

  const { signOut, user } = useAuth();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  const navigate = useNavigate();

  function handleSignOut() {
    const confirm = window.confirm("Tem certeza que deseja sair?");

    if (confirm) {
      navigate("/")
      signOut();
    }
  }

  return (
    <Container>
      <Brand>
        <h1>RocketMovies</h1>
      </Brand>

      {children}

      <Profile to="/profile">
        <div className="profile">

          <p>{user.name}</p>

        </div>
        <img
          src={avatarUrl}
          alt={user.name}
        />
      </Profile>

      <Logout>
        <ButtonText
          title="Sair"
          onClick={handleSignOut}
        />
      </Logout>


    </Container>
  )
}
