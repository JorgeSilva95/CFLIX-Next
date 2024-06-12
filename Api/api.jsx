import axios from "axios";

const baseURL = "https://api.themoviedb.org/3/movie/";
const searchURL = "https://api.themoviedb.org/3/search/movie?";
const token = "e68b6243bee88c674c06b447bb15c094";

const api = axios.create({
  baseURL: baseURL,
});

const apiSearch = axios.create({
  baseURL: searchURL,
});

apiSearch.interceptors.request.use(async (config) => {
  if (token) {
    apiSearch.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.request.use(async (config) => {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

export { api, apiSearch, token };

