/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useContext, useEffect, useState } from 'react';

import { api } from '../services/api';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {

    try {

      const response = await api.post('/sessions', { email, password });

      const { user, token } = response.data;

      // Salvo o user no localStorage, passando o user de objeto para texto.
      localStorage.setItem("@rocketmovies:user", JSON.stringify(user));
      // Salvo o token no localStorage, como token já é uma string não preciso converter.
      localStorage.setItem("@rocketmovies:token", token);

      api.defaults.headers['Authorization'] = `Bearer ${token}`;

      setData({ user, token });

    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert('Ocorreu um erro ao fazer login. Tente novamente');
      }
    }
  }

  async function signOut() {
    localStorage.removeItem("@rocketmovies:user");
    localStorage.removeItem("@rocketmovies:token");

    setData({});
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("@rocketmovies:user"));
    const token = localStorage.getItem("@rocketmovies:token");

    if (user && token) {
      api.defaults.headers['Authorization'] = `Bearer ${token}`;

      setData({ user, token });
    }
  }, [])



  return (
    <AuthContext.Provider value={{
      signIn,
      signOut,
      user: data.user
    }}>
      {children}
    </AuthContext.Provider >
  )
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
