import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie/",
});

const apiSearc = axios.create({
  baseURL: "https://api.themoviedb.org/3/search/movie?",
});

apiSearc.interceptors.request.use(async (config) => {
  const token = "e68b6243bee88c674c06b447bb15c094";
  if (token) {
    apiSearc.defaults.headers.authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.request.use(async (config) => {
  const token = "e68b6243bee88c674c06b447bb15c094";
  if (token) {
    api.defaults.headers.authorization = `Bearer ${token}`;
  }
  return config;
});

export { api, apiSearc };
