import axios from "axios";

export const api = axios.create({
  baseURL: "https://rocketmovies-api-g6kk.onrender.com"
});
